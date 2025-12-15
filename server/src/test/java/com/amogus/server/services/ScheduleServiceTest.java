package com.amogus.server.services;

import com.amogus.server.models.*;
import com.amogus.server.payload.request.CreateSchedule;
import com.amogus.server.payload.request.ScheduleRequest;
import com.amogus.server.repositories.ScheduleRepository;
import com.amogus.server.repositories.StudyRepository;
import com.amogus.server.repositories.UserProfileRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.Instant;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ScheduleServiceTest {

    @Mock
    private ScheduleRepository scheduleRepository;
    @Mock
    private StudyRepository studyRepository;
    @Mock
    private UserProfileRepository userRepository;

    @InjectMocks
    private ScheduleService scheduleService;

    private Userprofile medicUser;
    private Userprofile regularUser;
    private Schedule sampleSchedule;

    @BeforeEach
    void setup() {
        medicUser = userWithRole("Врач");
        regularUser = userWithRole("Администратор");
        sampleSchedule = sampleSchedule();
    }

    @Test
    void getSchedules_callsMedicQueryWhenUserIsMedic() {
        // Given
        Instant start = Instant.now();
        Instant end = start.plusSeconds(3600);
        when(scheduleRepository.findAllByStarttimeBetweenMedic(start, end, medicUser))
                .thenReturn(Collections.singletonList(sampleSchedule));

        // When
        List<?> schedules = scheduleService.getSchedules(start, end, medicUser);

        // Then
        assertThat(schedules).hasSize(1);
        verify(scheduleRepository).findAllByStarttimeBetweenMedic(start, end, medicUser);
    }

    @Test
    void getSchedules_callsDefaultQueryWhenUserNotMedic() {
        // Given
        Instant start = Instant.now();
        Instant end = start.plusSeconds(3600);
        when(scheduleRepository.findAllByStarttimeBetween(start, end, regularUser))
                .thenReturn(Collections.singletonList(sampleSchedule));

        // When
        List<?> schedules = scheduleService.getSchedules(start, end, regularUser);

        // Then
        assertThat(schedules).hasSize(1);
        verify(scheduleRepository).findAllByStarttimeBetween(start, end, regularUser);
    }

    @Test
    void createSchedule_mapsFieldsAndSaves() {
        // Given
        CreateSchedule dto = new CreateSchedule();
        dto.setStarttime(Instant.now());
        dto.setEndtime(dto.getStarttime().plusSeconds(900));
        dto.setStudyid(99);
        dto.setComments("note");

        Study study = sampleSchedule.getStudy();
        when(studyRepository.findById(99)).thenReturn(Optional.of(study));
        when(scheduleRepository.save(any(Schedule.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // When
        ScheduleRequest request = scheduleService.createSchedule(dto, medicUser);

        // Then
        assertThat(request.getStudyId()).isEqualTo(study.getId());
        assertThat(request.getStarttime()).isEqualTo(dto.getStarttime());
        assertThat(request.getComments()).isEqualTo("note");
        verify(scheduleRepository).save(any(Schedule.class));
    }

    @Test
    void getScheduleById_returnsDto() {
        // Given
        when(scheduleRepository.findById(1)).thenReturn(Optional.of(sampleSchedule));

        // When
        ScheduleRequest dto = scheduleService.getScheduleById(1);

        // Then
        assertThat(dto.getId()).isEqualTo(sampleSchedule.getId());
        assertThat(dto.getStudyId()).isEqualTo(sampleSchedule.getStudy().getId());
    }

    @Test
    void updateSchedule_updatesStudyAndUserWhenChanged() {
        // Given
        Schedule existing = sampleSchedule;
        Userprofile otherUser = userWithRole("Врач");
        otherUser.setId(999);

        CreateSchedule dto = new CreateSchedule();
        dto.setStarttime(existing.getStarttime().plusSeconds(60));
        dto.setEndtime(existing.getEndtime().plusSeconds(60));
        dto.setStudyid(123);
        dto.setComments("updated");

        Study newStudy = sampleStudy();
        newStudy.setId(123);

        when(scheduleRepository.findById(existing.getId())).thenReturn(Optional.of(existing));
        when(studyRepository.findById(123)).thenReturn(Optional.of(newStudy));
        when(scheduleRepository.save(existing)).thenReturn(existing);

        // When
        ScheduleRequest updated = scheduleService.updateSchedule(existing.getId(), dto, otherUser);

        // Then
        assertThat(updated.getStudyId()).isEqualTo(123);
        assertThat(updated.getComments()).isEqualTo("updated");
        verify(scheduleRepository).save(existing);
    }

    private Userprofile userWithRole(String roleName) {
        Role role = new Role();
        role.setRolename(roleName);

        UserRole userRole = new UserRole();
        userRole.setRole(role);

        Userprofile user = new Userprofile();
        user.setId((int) (Math.random() * 1000));
        user.setUserRoles(Set.of(userRole));
        user.setPerson(new Person());
        return user;
    }

    private Schedule sampleSchedule() {
        Schedule schedule = new Schedule();
        schedule.setId(1);
        schedule.setStarttime(Instant.now());
        schedule.setEndtime(schedule.getStarttime().plusSeconds(600));
        schedule.setStudy(sampleStudy());
        schedule.setScheduledbyuser(medicUser);
        schedule.setComments("comment");
        return schedule;
    }

    private Study sampleStudy() {
        Study study = new Study();
        study.setId(99);

        Device device = new Device();
        device.setId(3);
        device.setComments(Collections.emptySet());
        device.setDevicesn("SN");
        device.setLocation("Room");
        device.setStatus("OK");

        Userprofile user = new Userprofile();
        user.setId(7);
        user.setPerson(new Person());
        user.setUsername("doc");

        Patient patient = new Patient();
        patient.setId(11);
        patient.setPerson(new Person());

        study.setPatient(patient);
        study.setUser(user);
        study.setDevice(device);
        study.setStatus("NEW");
        study.setNotes("n");
        return study;
    }
}
