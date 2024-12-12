package com.amogus.server.models;

import com.amogus.server.payload.response.AuditLogResponse;
import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.Instant;

@Entity
@Table(name = "auditlog")
public class AuditLog {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "auditlog_id_gen")
    @SequenceGenerator(name = "auditlog_id_gen", sequenceName = "auditlog_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "userid", nullable = false)
    private Userprofile userid;

    @Column(name = "entity", nullable = false, length = Integer.MAX_VALUE)
    private String entity;

    @Column(name = "entityid", nullable = false)
    private Integer entityid;

    @ColumnDefault("now()")
    @Column(name = "\"timestamp\"", nullable = false)
    private Instant timestamp;
    @Column(name = "details", length = Integer.MAX_VALUE)
    private String details;

    @Column(name = "actiontype", columnDefinition = "actiontypeenum not null")
    private String actiontype;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Userprofile getUserid() {
        return userid;
    }

    public void setUserid(Userprofile userid) {
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

    public String getActionType() {
        return actiontype;
    }

    public void setActionType(String status) {
        this.actiontype = status;
    }

    public AuditLogResponse toResponse() {
        AuditLogResponse response = new AuditLogResponse();
        response.setActiontype(actiontype);
        response.setEntityid(entityid);
        response.setEntity(entity);
        response.setUserid(userid.toResponse());
        response.setDetails(details);
        response.setTimestamp(timestamp);
        response.setId(id);

        return response;
    }
}