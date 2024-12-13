package com.amogus.server.services;

import com.amogus.server.models.AuditLog;
import com.amogus.server.models.Userprofile;
import com.amogus.server.payload.response.AuditLogResponse;
import com.amogus.server.repositories.AuditLogRepository;
import com.amogus.server.security.CustomUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class AuditLogService {

    @Autowired
    private AuditLogRepository auditLogRepository;

    @Autowired
    private UserService userService;

    public void createAuditLog(Object entity, String actionType) {
        try {

            AuditLog auditLog = new AuditLog();

            auditLog.setEntity("Unknown");
            auditLog.setEntityid(-1);
            try {
                Integer entityId = (Integer) entity.getClass().getMethod("getId").invoke(entity);
                String name = entity.getClass().getSimpleName();
                auditLog.setEntity(name);
                if (name.equals("AuditLog")) {
                    return;
                }
                auditLog.setEntityid(entityId);
            } catch (Exception e) {
                // Handle exception or set default values
            }

            // Get current user
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication != null && authentication.isAuthenticated()) {
                Userprofile user = ((CustomUserDetails) authentication.getPrincipal()).getUser();
                auditLog.setUserid(user);
            } else {
                // Handle anonymous or system actions
                auditLog.setUserid(null);
            }

            auditLog.setActionType(actionType);
            auditLog.setTimestamp(Instant.now());
            auditLog.setDetails("");

            auditLogRepository.save(auditLog);
        } catch (Exception e) {
            // Handle exception or set default values
        }

    }

    public Page<AuditLogResponse> getAuditLogs(Pageable pageable) {
        return auditLogRepository.findAll(pageable).map(AuditLog::toResponse);
    }
}
