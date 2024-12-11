package com.amogus.server.controllers;

import com.amogus.server.payload.request.CreateSchedule;
import com.amogus.server.payload.request.ScheduleRequest;
import com.amogus.server.payload.response.ScheduleResponse;
import com.amogus.server.services.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/schedules")
public class ScheduleController {

    @Autowired
    private ScheduleService scheduleService;

    @GetMapping
    public ResponseEntity<List<ScheduleResponse>> getAllSchedules(
            @RequestParam(required = false) Instant start,
            @RequestParam(required = false) Instant end
    ) {
        return ResponseEntity.ok(scheduleService.getSchedules(start, end));
    }

    // Get a specific schedule by ID
    @GetMapping("/{id}")
    public ResponseEntity<ScheduleRequest> getScheduleById(@PathVariable Integer id) {
        return ResponseEntity.ok(scheduleService.getScheduleById(id));
    }

    // Create a new schedule
    @PostMapping
    public ResponseEntity<ScheduleRequest> createSchedule(@RequestBody CreateSchedule scheduleDTO) {
        return ResponseEntity.ok(scheduleService.createSchedule(scheduleDTO));
    }

    // Update an existing schedule
    @PutMapping("/{id}")
    public ResponseEntity<ScheduleRequest> updateSchedule(@PathVariable Integer id, @RequestBody CreateSchedule scheduleDTO) {
        return ResponseEntity.ok(scheduleService.updateSchedule(id, scheduleDTO));
    }

    // Delete a schedule
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSchedule(@PathVariable Integer id) {
        scheduleService.deleteSchedule(id);
        return ResponseEntity.ok().build();
    }

    // Get schedules by study ID
    @GetMapping("/studies/{studyId}")
    public ResponseEntity<List<ScheduleRequest>> getSchedulesByStudy(@PathVariable Integer studyId) {
        return ResponseEntity.ok(scheduleService.getSchedulesByStudyId(studyId));
    }

    // Get schedules by user ID
    @GetMapping("/users/{userId}")
    public ResponseEntity<List<ScheduleRequest>> getSchedulesByUser(@PathVariable Integer userId) {
        return ResponseEntity.ok(scheduleService.getSchedulesByUserId(userId));
    }
}
