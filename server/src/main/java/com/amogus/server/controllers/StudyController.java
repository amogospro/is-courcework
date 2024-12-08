package com.amogus.server.controllers;

import com.amogus.server.dto.StudyRequest;
import com.amogus.server.models.Study;
import com.amogus.server.services.StudyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/studies")
public class StudyController {

    @Autowired
    private StudyService studyService;

    @GetMapping
    public ResponseEntity<List<Study>> getAllStudies() {
        return ResponseEntity.ok(studyService.getAllStudies());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Study> getStudyById(@PathVariable Integer id) {
        return ResponseEntity.ok(studyService.getStudyById(id));
    }

    @PostMapping
    public ResponseEntity<Study> createStudy(@RequestBody StudyRequest study) {
        return ResponseEntity.ok(studyService.createStudy(study));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Study> updateStudy(@PathVariable Integer id, @RequestBody StudyRequest study) {
        return ResponseEntity.ok(studyService.updateStudy(id, study));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudy(@PathVariable Integer id) {
        studyService.deleteStudy(id);
        return ResponseEntity.ok().build();
    }
}
