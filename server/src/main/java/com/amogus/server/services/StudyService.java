package com.amogus.server.services;

import com.amogus.server.dto.StudyRequest;
import com.amogus.server.models.Study;
import com.amogus.server.repositories.DeviceRepository;
import com.amogus.server.repositories.PatientRepository;
import com.amogus.server.repositories.StudyRepository;
import com.amogus.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudyService {

    @Autowired
    private StudyRepository studyRepository;
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DeviceRepository deviceRepository;

    public List<Study> getAllStudies() {
        return studyRepository.findAll();
    }

    public Study getStudyById(Integer id) {
        return studyRepository.findById(id).orElseThrow(() -> new RuntimeException("Study not found"));
    }


    public Study createStudy(StudyRequest dto) {
        Study study = new Study();
        study.setPatient(patientRepository.findById(dto.getPatientid()).orElseThrow(() -> new RuntimeException("Patient not found")));
        study.setUser(userRepository.findById(dto.getUserid()).orElseThrow(() -> new RuntimeException("User not found")));
        study.setDevice(deviceRepository.findById(dto.getDeviceid()).orElseThrow(() -> new RuntimeException("Device not found")));
        study.setStatus(dto.getStatus());
        study.setNotes(dto.getNotes());
        return studyRepository.save(study);
    }

    public Study updateStudy(Integer id, StudyRequest dto) {
        return studyRepository.findById(id).map(study -> {
            if (dto.getPatientid() != null) {
                study.setPatient(patientRepository.findById(dto.getPatientid()).orElseThrow(() -> new RuntimeException("Patient not found")));
            }
            if (dto.getUserid() != null) {
                study.setUser(userRepository.findById(dto.getUserid()).orElseThrow(() -> new RuntimeException("User not found")));
            }
            if (dto.getDeviceid() != null) {
                study.setDevice(deviceRepository.findById(dto.getDeviceid()).orElseThrow(() -> new RuntimeException("Device not found")));
            }
            study.setStatus(dto.getStatus());
            study.setNotes(dto.getNotes());
            return studyRepository.save(study);
        }).orElseThrow(() -> new RuntimeException("Study not found"));
    }

    public void deleteStudy(Integer id) {
        studyRepository.deleteById(id);
    }
}
