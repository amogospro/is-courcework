package com.amogus.server.services;

import com.amogus.server.dto.CreateScheduleDTO;
import com.amogus.server.dto.ScheduleDTO;
import com.amogus.server.models.Schedule;
import com.amogus.server.repositories.ScheduleRepository;
import com.amogus.server.repositories.StudyRepository;
import com.amogus.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;
    @Autowired
    private StudyRepository studyRepository;
    @Autowired
    private UserRepository userRepository;

    public List<ScheduleDTO> getSchedules(Instant start, Instant end) {
        return scheduleRepository.findAllByStarttimeBetween(start, end).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public ScheduleDTO getScheduleById(Integer id) {
        return scheduleRepository.findById(id).map(this::convertToDTO).orElseThrow(() -> new RuntimeException("Schedule not found"));
    }

    public ScheduleDTO createSchedule(CreateScheduleDTO dto) {
        Schedule schedule = new Schedule();
        schedule.setStarttime(dto.getStarttime());
        schedule.setEndtime(dto.getEndtime());
        schedule.setStudyid(studyRepository.findById(dto.getStudyid()).orElseThrow(() -> new RuntimeException("Study not found")));
        schedule.setScheduledbyuserid(userRepository.findById(dto.getScheduledbyuserid()).orElseThrow(() -> new RuntimeException("User not found")));
        schedule.setComments(dto.getComments());
        return convertToDTO(scheduleRepository.save(schedule));
    }


    public ScheduleDTO updateSchedule(Integer id, CreateScheduleDTO dto) {
        Schedule schedule = scheduleRepository.findById(id).orElseThrow(() -> new RuntimeException("Schedule not found"));
        schedule.setStarttime(dto.getStarttime());
        schedule.setEndtime(dto.getEndtime());
        // If studyId or scheduledByUserId changes are allowed, handle them here, e.g.:
        if (!dto.getStudyid().equals(schedule.getStudyid().getId())) {
            schedule.setStudyid(studyRepository.findById(dto.getStudyid()).orElseThrow(() -> new RuntimeException("Study not found")));
        }
        if (!dto.getScheduledbyuserid().equals(schedule.getScheduledbyuserid().getId())) {
            schedule.setScheduledbyuserid(userRepository.findById(dto.getScheduledbyuserid()).orElseThrow(() -> new RuntimeException("User not found")));
        }
        schedule.setComments(dto.getComments());
        return convertToDTO(scheduleRepository.save(schedule));
    }


    public void deleteSchedule(Integer id) {
        scheduleRepository.deleteById(id);
    }

    public List<ScheduleDTO> getSchedulesByStudyId(Integer studyId) {
        return scheduleRepository.findByStudyid_Id(studyId).stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public List<ScheduleDTO> getSchedulesByUserId(Integer userId) {
        return scheduleRepository.findByScheduledbyuserid_Id(userId).stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private ScheduleDTO convertToDTO(Schedule schedule) {
        ScheduleDTO dto = new ScheduleDTO();
        dto.setId(schedule.getId());
        dto.setStarttime(schedule.getStarttime());
        dto.setEndtime(schedule.getEndtime());
        if (schedule.getStudyid() != null) {
            dto.setStudyId(schedule.getStudyid().getId());
        }
        if (schedule.getScheduledbyuserid() != null) {
            dto.setScheduledByUserId(schedule.getScheduledbyuserid().getId());
        }
        dto.setComments(schedule.getComments());
        return dto;
    }

}
