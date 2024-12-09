package com.amogus.server.controllers;

import com.amogus.server.dto.CreateScheduleDTO;
import com.amogus.server.dto.ScheduleDTO;
import com.amogus.server.models.Schedule;
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
    public ResponseEntity<List<Schedule>> getAllSchedules(
            @RequestParam(required = false) Instant start,
            @RequestParam(required = false) Instant end
    ) {
        return ResponseEntity.ok(scheduleService.getSchedules(start, end));
    }

    // Get a specific schedule by ID
    @GetMapping("/{id}")
    public ResponseEntity<ScheduleDTO> getScheduleById(@PathVariable Integer id) {
        return ResponseEntity.ok(scheduleService.getScheduleById(id));
    }

    // Create a new schedule
    @PostMapping
    public ResponseEntity<ScheduleDTO> createSchedule(@RequestBody CreateScheduleDTO scheduleDTO) {
        return ResponseEntity.ok(scheduleService.createSchedule(scheduleDTO));
    }

    // Update an existing schedule
    @PutMapping("/{id}")
    public ResponseEntity<ScheduleDTO> updateSchedule(@PathVariable Integer id, @RequestBody CreateScheduleDTO scheduleDTO) {
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
    public ResponseEntity<List<ScheduleDTO>> getSchedulesByStudy(@PathVariable Integer studyId) {
        return ResponseEntity.ok(scheduleService.getSchedulesByStudyId(studyId));
    }

    // Get schedules by user ID
    @GetMapping("/users/{userId}")
    public ResponseEntity<List<ScheduleDTO>> getSchedulesByUser(@PathVariable Integer userId) {
        return ResponseEntity.ok(scheduleService.getSchedulesByUserId(userId));
    }
}
