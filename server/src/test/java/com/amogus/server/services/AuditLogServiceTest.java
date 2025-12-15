package com.amogus.server.services;

import com.amogus.server.models.AuditLog;
import com.amogus.server.models.Userprofile;
import com.amogus.server.repositories.AuditLogRepository;
import com.amogus.server.security.CustomUserDetails;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class AuditLogServiceTest {

    @Mock
    private AuditLogRepository auditLogRepository;
    @Mock
    private UserService userService;

    @InjectMocks
    private AuditLogService auditLogService;

    @AfterEach
    void tearDown() {
        SecurityContextHolder.clearContext();
    }

    @Test
    void createAuditLog_persistsEntityWithCurrentUser() {
        // Given
        Userprofile user = new Userprofile();
        user.setId(1);
        user.setUsername("tester");
        user.setUserRoles(java.util.Collections.emptySet());
        var authentication = new UsernamePasswordAuthenticationToken(new CustomUserDetails(user), null, java.util.Collections.emptyList());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        class SampleEntity {
            public Integer getId() {
                return 5;
            }
        }

        when(auditLogRepository.save(any(AuditLog.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // When
        auditLogService.createAuditLog(new SampleEntity(), "ACTION");

        // Then
        ArgumentCaptor<AuditLog> captor = ArgumentCaptor.forClass(AuditLog.class);
        verify(auditLogRepository).save(captor.capture());
        AuditLog saved = captor.getValue();
        assertThat(saved.getEntity()).isEqualTo("SampleEntity");
        assertThat(saved.getEntityid()).isEqualTo(5);
        assertThat(saved.getUserid()).isSameAs(user);
        assertThat(saved.getActionType()).isEqualTo("ACTION");
    }
}
