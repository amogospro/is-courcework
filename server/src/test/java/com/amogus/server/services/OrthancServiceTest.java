package com.amogus.server.services;

import com.amogus.server.models.Study;
import com.amogus.server.repositories.StudyRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class OrthancServiceTest {

    @Mock
    private RestTemplate restTemplate;
    @Mock
    private StudyService studyService;
    @Mock
    private StudyRepository studyRepository;
    @Mock
    private MultipartFile multipartFile;

    @InjectMocks
    private OrthancService orthancService;

    @Test
    void uploadDicom_savesDicomIdOnStudy() throws IOException {
        // Given
        Study study = new Study();
        study.setId(1);
        when(studyService.getStudyById(1)).thenReturn(study);
        when(multipartFile.getBytes()).thenReturn("bytes".getBytes());
        when(restTemplate.postForObject(anyString(), any(), eq(Map.class)))
                .thenReturn(Map.of("ParentStudy", "dicom-id"));

        // When
        String result = orthancService.uploadDicom(multipartFile, 1);

        // Then
        assertThat(result).isEqualTo("amogus");
        ArgumentCaptor<Study> studyCaptor = ArgumentCaptor.forClass(Study.class);
        verify(studyRepository).save(studyCaptor.capture());
        assertThat(studyCaptor.getValue().getDicomid()).isEqualTo("dicom-id");
    }

    @Test
    void uploadDicom_whenStudyMissing_throws() {
        // Given
        when(studyService.getStudyById(9)).thenReturn(null);

        // When / Then
        assertThatThrownBy(() -> orthancService.uploadDicom(multipartFile, 9))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("Study not found");
    }

    @Test
    void downloadDicomArchive_fetchesBytes() {
        // Given
        Study study = new Study();
        study.setId(2);
        study.setDicomid("dicom-id");
        when(studyService.getStudyById(2)).thenReturn(study);
        when(restTemplate.getForObject(anyString(), eq(byte[].class))).thenReturn("archive".getBytes());

        // When
        byte[] bytes = orthancService.downloadDicomArchive(2);

        // Then
        assertThat(bytes).isEqualTo("archive".getBytes());
        verify(restTemplate).getForObject(contains("/studies/dicom-id/archive"), eq(byte[].class));
    }
}
