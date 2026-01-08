package com.amogus.server.controllers;


import com.amogus.server.models.AuditLog;
import com.amogus.server.payload.response.AuditLogResponse;
import com.amogus.server.services.AuditLogService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auditlogs")
public class AuditLogController {

    private final AuditLogService auditLogService;

    public AuditLogController(AuditLogService auditLogService) {
        this.auditLogService = auditLogService;
    }

    @GetMapping
    @PreAuthorize("hasAuthority('Администратор')")
    public ResponseEntity<Page<AuditLogResponse>> getAllAuditLogs(Pageable pageable) {
        Page<AuditLogResponse> auditLogs = auditLogService.getAuditLogs(pageable);
        return ResponseEntity.ok(auditLogs);
    }

}
