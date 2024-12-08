package com.amogus.server.models;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.Instant;

@Entity
@Table(name = "schedule")
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "schedule_id_gen")
    @SequenceGenerator(name = "schedule_id_gen", sequenceName = "schedule_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "starttime", nullable = false)
    private Instant starttime;

    @Column(name = "endtime", nullable = false)
    private Instant endtime;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.SET_NULL)
    @JoinColumn(name = "studyid", nullable = false)
    private Study studyid;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "scheduledbyuserid", nullable = false)
    private Userprofile scheduledbyuserid;

    @Column(name = "comments", length = Integer.MAX_VALUE)
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

    public com.amogus.server.models.Study getStudyid() {
        return studyid;
    }

    public void setStudyid(com.amogus.server.models.Study studyid) {
        this.studyid = studyid;
    }

    public Userprofile getScheduledbyuserid() {
        return scheduledbyuserid;
    }

    public void setScheduledbyuserid(Userprofile scheduledbyuserid) {
        this.scheduledbyuserid = scheduledbyuserid;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

}