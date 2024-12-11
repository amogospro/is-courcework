package com.amogus.server.payload.request;

import java.time.Instant;

public class CreateSchedule {
    private Instant starttime;
    private Instant endtime;
    private Integer studyid;
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

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }


    // Getters and setters
}
