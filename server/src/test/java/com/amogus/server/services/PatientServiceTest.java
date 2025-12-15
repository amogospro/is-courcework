package com.amogus.server.services;

import com.amogus.server.models.Patient;
import com.amogus.server.repositories.PatientRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PatientServiceTest {

    @Mock
    private PatientRepository patientRepository;

    @InjectMocks
    private PatientService patientService;

    @Test
    void updatePatient_updatesFieldsWhenFound() {
        // Given
        Patient existing = new Patient();
        existing.setId(1);
        existing.setInsurancepolicynumber("old");

        Patient input = new Patient();
        input.setInsurancepolicynumber("new-policy");

        when(patientRepository.findById(1)).thenReturn(Optional.of(existing));
        when(patientRepository.save(any(Patient.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // When
        Patient result = patientService.updatePatient(1, input);

        // Then
        assertThat(result.getInsurancepolicynumber()).isEqualTo("new-policy");
        verify(patientRepository).save(existing);
    }

    @Test
    void updatePatient_whenMissing_throws() {
        // Given
        when(patientRepository.findById(99)).thenReturn(Optional.empty());

        // When / Then
        assertThatThrownBy(() -> patientService.updatePatient(99, new Patient()))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("Patient not found");
    }

    @Test
    void createPatient_savesThroughRepository() {
        // Given
        Patient patient = new Patient();
        when(patientRepository.save(patient)).thenReturn(patient);

        // When
        Patient result = patientService.createPatient(patient);

        // Then
        assertThat(result).isSameAs(patient);
        verify(patientRepository).save(patient);
    }

    @Test
    void getPatientById_returnsNullWhenMissing() {
        // Given
        when(patientRepository.findById(5)).thenReturn(Optional.empty());

        // When
        Patient result = patientService.getPatientById(5);

        // Then
        assertThat(result).isNull();
    }
}
