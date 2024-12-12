package com.amogus.server.controllers;

import com.amogus.server.payload.request.StudyRequest;
import com.amogus.server.models.Study;
import com.amogus.server.payload.response.StudyDataResponse;
import com.amogus.server.payload.response.StudyResponse;
import com.amogus.server.services.StudyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/studies")
public class StudyController {

    @Autowired
    private StudyService studyService;

    @GetMapping
    public ResponseEntity<Page<StudyResponse>> getAllStudies(
            Pageable pageable,
            @RequestParam(required = false) String patientName,
            @RequestParam(required = false) String doctorName,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {

        Page<StudyResponse> studies = studyService.getAllStudies(pageable, patientName, doctorName, date);
        return new ResponseEntity<>(studies, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('Врач')")
    public ResponseEntity<StudyDataResponse> getStudyById(@PathVariable Integer id) {
        return ResponseEntity.ok(studyService.getStudyDataById(id));
    }

    @PostMapping
    @PreAuthorize("hasAuthority('Врач')")
    public ResponseEntity<Study> createStudy(@RequestBody StudyRequest study) {
        return ResponseEntity.ok(studyService.createStudy(study));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('Врач')")
    public ResponseEntity<Study> updateStudy(@PathVariable Integer id, @RequestBody StudyRequest study) {
        return ResponseEntity.ok(studyService.updateStudy(id, study));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('Врач')")
    public ResponseEntity<Void> deleteStudy(@PathVariable Integer id) {
        studyService.deleteStudy(id);
        return ResponseEntity.ok().build();
    }
}
