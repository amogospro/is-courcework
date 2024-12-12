package com.amogus.server.services;

import com.amogus.server.payload.request.StudyRequest;
import com.amogus.server.models.Study;
import com.amogus.server.payload.response.StudyDataResponse;
import com.amogus.server.payload.response.StudyResponse;
import com.amogus.server.repositories.DeviceRepository;
import com.amogus.server.repositories.PatientRepository;
import com.amogus.server.repositories.StudyRepository;
import com.amogus.server.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class StudyService {

    @Autowired
    private StudyRepository studyRepository;
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private UserProfileRepository userRepository;
    @Autowired
    private DeviceRepository deviceRepository;

    public Page<StudyResponse> getAllStudies(Pageable pageable, String patientName, String doctorName, LocalDate date) {
        Specification<Study> spec = Specification.where(StudySpecifications.hasPatientName(patientName))
                .and(StudySpecifications.hasDoctorName(doctorName))
                .and(StudySpecifications.hasDate(date));

        Page<Study> studies = studyRepository.findAll(spec, pageable);
        return studies.map(Study::toResponse);
    }

    public Study getStudyById(Integer id) {
        return studyRepository.findById(id).orElseThrow(() -> new RuntimeException("Study not found"));
    }

    public StudyDataResponse getStudyDataById(Integer id) {
        return studyRepository.getStudyData(id).orElseThrow(() -> new RuntimeException("Study not found"));
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
