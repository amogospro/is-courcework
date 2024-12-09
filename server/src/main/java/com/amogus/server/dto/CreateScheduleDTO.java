package com.amogus.server.dto;

import java.time.Instant;

public class CreateScheduleDTO {
    private Instant starttime;
    private Instant endtime;
    private Integer studyid;
    private Integer scheduledbyuserid;
    private String comments;

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


    public Integer getStudyid() {
        return studyid;
    }

    public void setStudyid(Integer studyid) {
        this.studyid = studyid;
    }


    public Integer getScheduledbyuserid() {
        return scheduledbyuserid;
    }

    public void setScheduledbyuserid(Integer scheduledbyuserid) {
        this.scheduledbyuserid = scheduledbyuserid;
    }


    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }


    // Getters and setters
}
