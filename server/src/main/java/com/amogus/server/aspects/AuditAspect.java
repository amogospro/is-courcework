package com.amogus.server.aspects;

import com.amogus.server.models.AuditLog;
import com.amogus.server.models.Userprofile;
import com.amogus.server.repositories.AuditLogRepository;
import com.amogus.server.security.CustomUserDetails;
import com.amogus.server.services.AuditLogService;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.time.Instant;

@Aspect
@Component
public class AuditAspect {

    @Autowired
    private AuditLogService auditLogService;

    // Define a pointcut for repository save methods, excluding AuditLogRepository
    @Pointcut("execution(* org.springframework.data.repository.Repository+.*(..)) && " +
            "!execution(* com.amogus.server.repositories.AuditLogRepository.*(..))")
    public void repositoryMethods() {
    }

    @After("repositoryMethods() && (execution(* save*(..)) || execution(* delete*(..)))")
    public void auditRepositoryOperations(JoinPoint joinPoint) {
        Object entity = joinPoint.getArgs()[0];
        String actionType = determineActionType(joinPoint.getSignature().getName());

        auditLogService.createAuditLog(entity, actionType);
    }

    private String determineActionType(String methodName) {
        if (methodName.startsWith("save")) {
            return "Изменение";
        } else if (methodName.startsWith("delete")) {
            return "Удаление";
        }
        // Add more action types if needed
        return "Изменение";
    }

}
