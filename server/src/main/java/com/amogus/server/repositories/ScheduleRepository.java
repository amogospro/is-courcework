package com.amogus.server.repositories;

import com.amogus.server.models.Schedule;
import com.amogus.server.models.Userprofile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {

    List<Schedule> findByStudy_Id(Integer studyidId);

    List<Schedule> findByScheduledbyuser_Id(Integer scheduledbyuseridId);

    @Query("SELECT s FROM Schedule s WHERE s.starttime >= :start AND s.endtime <= :end")
    List<Schedule> findAllByStarttimeBetween(Instant start, Instant end, Userprofile user);

    @Query("SELECT s FROM Schedule s WHERE s.starttime >= :start AND s.endtime <= :end AND s.study.user = :user")
    List<Schedule> findAllByStarttimeBetweenMedic(Instant start, Instant end, Userprofile user);
}