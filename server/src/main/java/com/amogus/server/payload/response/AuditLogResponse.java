package com.amogus.server.payload.response;

import java.time.Instant;

public class AuditLogResponse {
    private Integer id;
    private UserResponse userid;
    private String entity;
    private Integer entityid;
    private Instant timestamp;
    private String details;
    private String actiontype;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public UserResponse getUserid() {
        return userid;
    }

    public void setUserid(UserResponse userid) {
        this.userid = userid;
    }


    public String getEntity() {
        return entity;
    }

    public void setEntity(String entity) {
        this.entity = entity;
    }


    public Integer getEntityid() {
        return entityid;
    }

    public void setEntityid(Integer entityid) {
        this.entityid = entityid;
    }


    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }


    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }


    public String getActiontype() {
        return actiontype;
    }

    public void setActiontype(String actiontype) {
        this.actiontype = actiontype;
    }

}
