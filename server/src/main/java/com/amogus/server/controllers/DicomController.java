package com.amogus.server.controllers;

import com.amogus.server.services.OrthancService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api/dicom")
public class DicomController {

    @Autowired
    private OrthancService orthancService;

    @PostMapping("/upload/{id}")
    @PreAuthorize("hasAuthority('Врач')")
    public ResponseEntity<?> uploadDicom(@RequestParam("file") MultipartFile file, @PathVariable("id") Integer studyId) {
        try {
            String response = orthancService.uploadDicom(file, studyId);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload DICOM: " + e.getMessage());
        }
    }

    @GetMapping("/download/{id}")
    @PreAuthorize("hasAuthority('Врач')")
    public ResponseEntity<byte[]> downloadDicomArchive(@PathVariable("id") Integer studyId) {
        try {
            byte[] archiveData = orthancService.downloadDicomArchive(studyId);
            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_OCTET_STREAM)
                    .body(archiveData);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
