package com.amogus.server.services;

import com.amogus.server.models.Study;
import com.amogus.server.repositories.StudyRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class OrthancService {

    private final RestTemplate restTemplate;

    private final String orthancBaseUrl = "http://localhost:8042"; // Adjust as necessary
    private final StudyService studyService;
    private final StudyRepository studyRepository;

    public OrthancService(RestTemplate restTemplate, StudyService studyService, StudyRepository studyRepository) {
        this.restTemplate = restTemplate;
        this.studyService = studyService;
        this.studyRepository = studyRepository;
    }

    @Transactional
    public String uploadDicom(MultipartFile file, Integer studyId) throws IOException {
        // Retrieve the study entity
        Study study = studyService.getStudyById(studyId);
        if (study == null) {
            throw new IllegalStateException("Study not found");
        }

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/dicom");

        byte[] fileBytes = file.getBytes(); // Get bytes from the file
        HttpEntity<byte[]> entity = new HttpEntity<>(fileBytes, headers);
//        HttpEntity<ByteArrayResource> entity = new HttpEntity<>(new ByteArrayResource(file.getBytes()), headers);

        // Upload to Orthanc
        Map<String, Object> response = restTemplate.postForObject(orthancBaseUrl + "/instances", entity, Map.class);

        // Update study with DICOM ID from Orthanc
        assert response != null;
        String dicomId = (String) response.get("ParentStudy");
        study.setDicomid(dicomId);
        studyRepository.save(study);

        return "amogus";
    }


    public byte[] downloadDicomArchive(Integer studyId) {
        Study study = studyService.getStudyById(studyId);
        if (study == null) {
            throw new IllegalStateException("Study not found");
        }
        String id = study.getDicomid();
        if (id == null) {
            throw new IllegalStateException("Dicomid not found");
        }
        String url = orthancBaseUrl + "/studies/" + id + "/archive";
        return restTemplate.getForObject(url, byte[].class);
    }
}
