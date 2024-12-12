package com.amogus.server.models;

import com.amogus.server.payload.response.DeviceCommentResponse;
import com.amogus.server.payload.response.DeviceResponse;
import com.amogus.server.payload.response.StudyResponse;
import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.Instant;

@Entity
@Table(name = "devicecomment")
public class DeviceComment {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "devicecomment_id_gen")
    @SequenceGenerator(name = "devicecomment_id_gen", sequenceName = "devicecomment_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "deviceid", nullable = false)
    private Device device;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "userid", nullable = false)
    private Userprofile userid;

    @Column(name = "commenttext", nullable = false, length = Integer.MAX_VALUE)
    private String commenttext;

    @ColumnDefault("now()")
    @Column(name = "\"timestamp\"", nullable = false)
    private Instant timestamp;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Device getDevice() {
        return device;
    }

    public void setDevice(Device deviceid) {
        this.device = deviceid;
    }

    public Userprofile getUserid() {
        return userid;
    }

    public void setUserid(Userprofile userid) {
        this.userid = userid;
    }

    public String getCommenttext() {
        return commenttext;
    }

    public void setCommenttext(String commenttext) {
        this.commenttext = commenttext;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }

    public DeviceCommentResponse toResponse() {
        DeviceCommentResponse response = new DeviceCommentResponse();
        response.setId(id);
        response.setUser(userid.toResponse());
        response.setCommenttext(commenttext);
        response.setTimestamp(timestamp);
        return response;
    }
}