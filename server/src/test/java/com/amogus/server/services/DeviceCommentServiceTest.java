package com.amogus.server.services;

import com.amogus.server.models.Device;
import com.amogus.server.models.DeviceComment;
import com.amogus.server.models.Userprofile;
import com.amogus.server.repositories.DeviceCommentsRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class DeviceCommentServiceTest {

    @Mock
    private DeviceCommentsRepository deviceCommentsRepository;

    @InjectMocks
    private DeviceCommentService deviceCommentService;

    @Test
    void createComment_setsFieldsAndSaves() {
        // Given
        Device device = new Device();
        Userprofile user = new Userprofile();

        when(deviceCommentsRepository.save(any(DeviceComment.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // When
        DeviceComment saved = deviceCommentService.createComment(device, user, "text");

        // Then
        assertThat(saved.getDevice()).isSameAs(device);
        assertThat(saved.getUserid()).isSameAs(user);
        assertThat(saved.getCommenttext()).isEqualTo("text");
        assertThat(saved.getTimestamp()).isNotNull();
        verify(deviceCommentsRepository).save(any(DeviceComment.class));
    }

    @Test
    void updateComment_replacesWhenExists() {
        // Given
        DeviceComment comment = new DeviceComment();
        comment.setId(5);

        when(deviceCommentsRepository.existsById(5)).thenReturn(true);
        when(deviceCommentsRepository.save(comment)).thenReturn(comment);

        // When
        DeviceComment updated = deviceCommentService.updateComment(5, comment);

        // Then
        assertThat(updated.getId()).isEqualTo(5);
        verify(deviceCommentsRepository).save(comment);
    }

    @Test
    void updateComment_returnsNullWhenMissing() {
        // Given
        when(deviceCommentsRepository.existsById(7)).thenReturn(false);

        // When
        DeviceComment result = deviceCommentService.updateComment(7, new DeviceComment());

        // Then
        assertThat(result).isNull();
        verify(deviceCommentsRepository, never()).save(any());
    }

    @Test
    void deleteComment_returnsTrueWhenDeleted() {
        // Given
        when(deviceCommentsRepository.existsById(3)).thenReturn(true);

        // When
        boolean result = deviceCommentService.deleteComment(3);

        // Then
        assertThat(result).isTrue();
        verify(deviceCommentsRepository).deleteById(3);
    }

    @Test
    void deleteComment_returnsFalseWhenMissing() {
        // Given
        when(deviceCommentsRepository.existsById(4)).thenReturn(false);

        // When
        boolean result = deviceCommentService.deleteComment(4);

        // Then
        assertThat(result).isFalse();
        verify(deviceCommentsRepository, never()).deleteById(any());
    }
}
