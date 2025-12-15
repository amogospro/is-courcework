package com.amogus.server.services;

import com.amogus.server.models.Device;
import com.amogus.server.models.Patient;
import com.amogus.server.models.Study;
import com.amogus.server.models.Userprofile;
import com.amogus.server.payload.request.StudyRequest;
import com.amogus.server.repositories.DeviceRepository;
import com.amogus.server.repositories.PatientRepository;
import com.amogus.server.repositories.StudyRepository;
import com.amogus.server.repositories.UserProfileRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class StudyServiceTest {

    @Mock
    private StudyRepository studyRepository;
    @Mock
    private PatientRepository patientRepository;
    @Mock
    private UserProfileRepository userRepository;
    @Mock
    private DeviceRepository deviceRepository;

    @InjectMocks
    private StudyService studyService;

    private Patient patient;
    private Userprofile user;
    private Device device;

    @BeforeEach
    void setup() {
        patient = new Patient();
        patient.setId(1);

        user = new Userprofile();
        user.setId(2);

        device = new Device();
        device.setId(3);
        device.setComments(java.util.Collections.emptySet());
    }

    @Test
    void createStudy_savesWithResolvedRelations() {
        // Given
        StudyRequest dto = new StudyRequest();
        dto.setPatientid(patient.getId());
        dto.setUserid(user.getId());
        dto.setDeviceid(device.getId());
        dto.setStatus("NEW");
        dto.setNotes("note");

        when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));
        when(userRepository.findById(user.getId())).thenReturn(Optional.of(user));
        when(deviceRepository.findById(device.getId())).thenReturn(Optional.of(device));
        when(studyRepository.save(any(Study.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // When
        Study created = studyService.createStudy(dto);

        // Then
        assertThat(created.getPatient()).isSameAs(patient);
        assertThat(created.getUser()).isSameAs(user);
        assertThat(created.getDevice()).isSameAs(device);
        assertThat(created.getStatus()).isEqualTo("NEW");
        assertThat(created.getNotes()).isEqualTo("note");
        verify(studyRepository).save(any(Study.class));
    }

    @Test
    void updateStudy_updatesProvidedFields() {
        // Given
        Study existing = new Study();
        existing.setId(10);
        existing.setStatus("OLD");
        existing.setNotes("old");
        existing.setPatient(patient);
        existing.setUser(user);
        existing.setDevice(device);

        StudyRequest dto = new StudyRequest();
        dto.setPatientid(patient.getId());
        dto.setUserid(user.getId());
        dto.setDeviceid(device.getId());
        dto.setStatus("UPDATED");
        dto.setNotes("new");

        when(studyRepository.findById(existing.getId())).thenReturn(Optional.of(existing));
        when(patientRepository.findById(patient.getId())).thenReturn(Optional.of(patient));
        when(userRepository.findById(user.getId())).thenReturn(Optional.of(user));
        when(deviceRepository.findById(device.getId())).thenReturn(Optional.of(device));
        when(studyRepository.save(existing)).thenReturn(existing);

        // When
        Study updated = studyService.updateStudy(existing.getId(), dto);

        // Then
        assertThat(updated.getStatus()).isEqualTo("UPDATED");
        assertThat(updated.getNotes()).isEqualTo("new");
        verify(studyRepository).save(existing);
    }

    @Test
    void updateStudy_whenMissing_throws() {
        // Given
        when(studyRepository.findById(404)).thenReturn(Optional.empty());

        // When / Then
        assertThatThrownBy(() -> studyService.updateStudy(404, new StudyRequest()))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("Study not found");
    }

    @Test
    void getStudyById_whenMissing_throws() {
        // Given
        when(studyRepository.findById(100)).thenReturn(Optional.empty());

        // When / Then
        assertThatThrownBy(() -> studyService.getStudyById(100))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("Study not found");
    }

    @Test
    void deleteStudy_callsRepository() {
        // When
        studyService.deleteStudy(55);

        // Then
        verify(studyRepository).deleteById(55);
    }

    @Test
    void getAllStudies_buildsSpecificationWithFilters() {
        // Given
        Page<Study> page = new PageImpl<>(java.util.Collections.singletonList(sampleStudy()));
        when(studyRepository.findAll(any(org.springframework.data.jpa.domain.Specification.class), any(PageRequest.class))).thenReturn(page);

        // When
        Page<com.amogus.server.payload.response.StudyResponse> result = studyService.getAllStudies(PageRequest.of(0, 5), "name", "doc", LocalDate.now());

        // Then
        assertThat(result.getContent()).hasSize(1);
        verify(studyRepository).findAll(any(org.springframework.data.jpa.domain.Specification.class), any(PageRequest.class));
    }

    private Study sampleStudy() {
        Study study = new Study();
        study.setId(50);
        study.setPatient(patient);
        study.setUser(user);
        study.setDevice(device);
        study.setStatus("STATUS");
        study.setNotes("notes");
        return study;
    }
}
