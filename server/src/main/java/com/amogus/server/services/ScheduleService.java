package com.amogus.server.services;

import com.amogus.server.models.UserRole;
import com.amogus.server.models.Userprofile;
import com.amogus.server.payload.request.CreateSchedule;
import com.amogus.server.payload.request.ScheduleRequest;
import com.amogus.server.models.Schedule;
import com.amogus.server.payload.response.ScheduleResponse;
import com.amogus.server.repositories.ScheduleRepository;
import com.amogus.server.repositories.StudyRepository;
import com.amogus.server.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;
    @Autowired
    private StudyRepository studyRepository;
    @Autowired
    private UserProfileRepository userRepository;

    public List<ScheduleResponse> getSchedules(Instant start, Instant end, Userprofile user) {

        boolean medic = false;
        for (UserRole role : user.getUserRoles()) {
            if (Objects.equals(role.getRole().getRolename(), "Врач")) {
                medic = true;
                break;
            }
        }
        for (UserRole role : user.getUserRoles()) {
            if (Objects.equals(role.getRole().getRolename(), "Администратор")) {
                medic = false;
                break;
            }
        }
        if (medic) {
            return scheduleRepository.findAllByStarttimeBetweenMedic(start, end, user).stream().map(this::convertToResponse)
                    .collect(Collectors.toList());
        }
        return scheduleRepository.findAllByStarttimeBetween(start, end, user).stream().map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    public ScheduleRequest getScheduleById(Integer id) {
        return scheduleRepository.findById(id).map(this::convertToDTO).orElseThrow(() -> new RuntimeException("Schedule not found"));
    }

    public ScheduleRequest createSchedule(CreateSchedule dto, Userprofile user) {
        Schedule schedule = new Schedule();
        schedule.setStarttime(dto.getStarttime());
        schedule.setEndtime(dto.getEndtime());
        schedule.setStudy(studyRepository.findById(dto.getStudyid()).orElseThrow(() -> new RuntimeException("Study not found")));
        schedule.setScheduledbyuser(user);
        schedule.setComments(dto.getComments());
        return convertToDTO(scheduleRepository.save(schedule));
    }


    public ScheduleRequest updateSchedule(Integer id, CreateSchedule dto, Userprofile user) {
        Schedule schedule = scheduleRepository.findById(id).orElseThrow(() -> new RuntimeException("Schedule not found"));
        schedule.setStarttime(dto.getStarttime());
        schedule.setEndtime(dto.getEndtime());
        // If studyId or scheduledByUserId changes are allowed, handle them here, e.g.:
        if (!dto.getStudyid().equals(schedule.getStudy().getId())) {
            schedule.setStudy(studyRepository.findById(dto.getStudyid()).orElseThrow(() -> new RuntimeException("Study not found")));
        }
        if (!user.getId().equals(schedule.getScheduledbyuser().getId())) {
            schedule.setScheduledbyuser(user);
        }
        schedule.setComments(dto.getComments());
        return convertToDTO(scheduleRepository.save(schedule));
    }


    public void deleteSchedule(Integer id) {
        scheduleRepository.deleteById(id);
    }

    public List<ScheduleRequest> getSchedulesByStudyId(Integer studyId) {
        return scheduleRepository.findByStudy_Id(studyId).stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public List<ScheduleRequest> getSchedulesByUserId(Integer userId) {
        return scheduleRepository.findByScheduledbyuser_Id(userId).stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private ScheduleRequest convertToDTO(Schedule schedule) {
        ScheduleRequest dto = new ScheduleRequest();
        dto.setId(schedule.getId());
        dto.setStarttime(schedule.getStarttime());
        dto.setEndtime(schedule.getEndtime());
        if (schedule.getStudy() != null) {
            dto.setStudyId(schedule.getStudy().getId());
        }
        if (schedule.getScheduledbyuser() != null) {
            dto.setScheduledByUserId(schedule.getScheduledbyuser().getId());
        }
        dto.setComments(schedule.getComments());
        return dto;
    }

    private ScheduleResponse convertToResponse(Schedule schedule) {
        ScheduleResponse dto = new ScheduleResponse();
        dto.setId(schedule.getId());
        dto.setStarttime(schedule.getStarttime());
        dto.setEndtime(schedule.getEndtime());
        if (schedule.getStudy() != null) {
            dto.setStudy(schedule.getStudy().toResponse());
        }
        if (schedule.getScheduledbyuser() != null) {
            dto.setScheduledbyuser(schedule.getScheduledbyuser().toResponse());
        }
        dto.setComments(schedule.getComments());
        return dto;
    }
}
