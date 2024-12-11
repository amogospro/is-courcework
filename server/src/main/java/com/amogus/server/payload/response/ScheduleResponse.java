package com.amogus.server.payload.response;

import com.amogus.server.models.Study;
import com.amogus.server.models.Userprofile;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.Instant;

public class ScheduleResponse {
    private Integer id;

    private Instant starttime;

    private Instant endtime;

    private StudyResponse study;

    private UserResponse scheduledbyuser;

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

    public StudyResponse getStudy() {
        return study;
    }

    public void setStudy(StudyResponse study) {
        this.study = study;
    }

    public UserResponse getScheduledbyuser() {
        return scheduledbyuser;
    }

    public void setScheduledbyuser(UserResponse scheduledbyuserid) {
        this.scheduledbyuser = scheduledbyuserid;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
