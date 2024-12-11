package com.amogus.server.payload.request;

import java.time.Instant;

public class ScheduleRequest {
    private Integer id;
    private Instant starttime;
    private Instant endtime;
    private Integer studyId;
    private Integer scheduledByUserId;
    private String comments;
    

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public Instant getStarttime() {
        return starttime;
    }

    public void setStarttime(Instant starttime) {
        this.starttime = starttime;
    }


    public Instant getEndtime() {
        return endtime;
    }

    public void setEndtime(Instant endtime) {
        this.endtime = endtime;
    }


    public Integer getStudyId() {
        return studyId;
    }

    public void setStudyId(Integer studyId) {
        this.studyId = studyId;
    }


    public Integer getScheduledByUserId() {
        return scheduledByUserId;
    }

    public void setScheduledByUserId(Integer scheduledByUserId) {
        this.scheduledByUserId = scheduledByUserId;
    }


    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }


    // Getters and setters
}

