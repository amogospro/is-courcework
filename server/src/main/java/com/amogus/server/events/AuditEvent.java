package com.amogus.server.events;

import com.amogus.server.models.Userprofile;
import org.springframework.context.ApplicationEvent;

public class AuditEvent extends ApplicationEvent {
    private final String actionType;
    private final Object entity;
    private final Userprofile user;

    public AuditEvent(Object source, String actionType, Object entity, Userprofile user) {
        super(source);
        this.actionType = actionType;
        this.entity = entity;
        this.user = user;
    }

    // Getters
    public String getActionType() { return actionType; }
    public Object getEntity() { return entity; }
    public Userprofile getUser() { return user; }
}
