package com.amogus.server.repositories;

import com.amogus.server.models.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.Arrays;
import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Integer> {

    List<Schedule> findByStudyid_Id(Integer studyidId);

    List<Schedule> findByScheduledbyuserid_Id(Integer scheduledbyuseridId);

    @Query("SELECT s FROM Schedule s WHERE s.starttime >= :start AND s.endtime <= :end")
    List<Schedule> findAllByStarttimeBetween(Instant start, Instant end);
}