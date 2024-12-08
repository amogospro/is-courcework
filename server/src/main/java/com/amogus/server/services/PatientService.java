package com.amogus.server.services;

import com.amogus.server.models.Patient;
import com.amogus.server.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PatientService {

    private final PatientRepository patientRepository;

    @Autowired
    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public Page<Patient> getAllPatients(Pageable pageable) {
        return patientRepository.findAll(pageable);
    }

    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    public Patient updatePatient(Integer id, Patient patientDetails) {
        return patientRepository.findById(id)
                .map(patient -> {
                    patient.setPerson(patientDetails.getPerson());
                    patient.setInsurancepolicynumber(patientDetails.getInsurancepolicynumber());
                    return patientRepository.save(patient);
                })
                .orElseThrow(() -> new RuntimeException("Patient not found with id " + id));
    }

    public void deletePatient(Integer id) {
        patientRepository.deleteById(id);
    }


    public Patient getPatientById(Integer id) {
        return patientRepository.findById(id).orElse(null); // Fetch by ID, return null if not found
    }

    public Patient updatePatient(Patient patient) {
        return patientRepository.save(patient);
    }
}
