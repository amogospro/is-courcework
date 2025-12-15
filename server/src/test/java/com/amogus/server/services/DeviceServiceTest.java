package com.amogus.server.services;

import com.amogus.server.models.Device;
import com.amogus.server.models.DeviceComment;
import com.amogus.server.models.Userprofile;
import com.amogus.server.payload.response.DeviceResponse;
import com.amogus.server.repositories.DeviceRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import java.util.Collections;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class DeviceServiceTest {

    @Mock
    private DeviceRepository deviceRepository;

    @InjectMocks
    private DeviceService deviceService;

    private Device existingDevice;

    @BeforeEach
    void setup() {
        existingDevice = new Device();
        existingDevice.setId(1);
        existingDevice.setDevicesn("SN-1");
        existingDevice.setLocation("Room A");
        existingDevice.setStatus("OK");
        existingDevice.setComments(Collections.emptySet());
    }

    @Test
    void updateDevice_updatesFieldsAndCallsStatusProcedure() {
        // Given
        Device input = new Device();
        input.setId(1);
        input.setDevicesn("SN-UPDATED");
        input.setLocation("Room B");
        input.setStatus("BROKEN");

        Userprofile actor = new Userprofile();
        actor.setId(10);

        when(deviceRepository.findById(1)).thenReturn(Optional.of(existingDevice));
        when(deviceRepository.save(any(Device.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // When
        DeviceResponse response = deviceService.updateDevice(1, input, actor);

        // Then
        assertThat(response.getDevicesn()).isEqualTo("SN-UPDATED");
        assertThat(response.getLocation()).isEqualTo("Room B");
        assertThat(response.getStatus()).isEqualTo("BROKEN");

        ArgumentCaptor<Device> savedCaptor = ArgumentCaptor.forClass(Device.class);
        verify(deviceRepository).save(savedCaptor.capture());
        Device saved = savedCaptor.getValue();
        assertThat(saved.getDevicesn()).isEqualTo("SN-UPDATED");
        assertThat(saved.getLocation()).isEqualTo("Room B");
        assertThat(saved.getStatus()).isEqualTo("BROKEN");

        verify(deviceRepository).updateDeviceStatus(eq(input.getId()), eq("BROKEN"), eq(actor.getId()), any());
    }

    @Test
    void updateDevice_whenNotFound_throws() {
        // Given
        when(deviceRepository.findById(999)).thenReturn(Optional.empty());

        // When / Then
        assertThatThrownBy(() -> deviceService.updateDevice(999, new Device(), new Userprofile()))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("Device not found");
        verify(deviceRepository, never()).updateDeviceStatus(any(), any(), any(), any());
    }

    @Test
    void createDevice_returnsResponseFromSavedEntity() {
        // Given
        Device toSave = new Device();
        toSave.setDevicesn("SN-NEW");
        toSave.setLocation("Room C");
        toSave.setStatus("OK");
        toSave.setComments(Collections.emptySet());

        Device saved = new Device();
        saved.setId(5);
        saved.setDevicesn("SN-NEW");
        saved.setLocation("Room C");
        saved.setStatus("OK");
        saved.setComments(Collections.emptySet());

        when(deviceRepository.save(toSave)).thenReturn(saved);

        // When
        DeviceResponse response = deviceService.createDevice(toSave);

        // Then
        assertThat(response.getId()).isEqualTo(5);
        assertThat(response.getDevicesn()).isEqualTo("SN-NEW");
        verify(deviceRepository).save(toSave);
    }

    @Test
    void getAllDevices_mapsToResponses() {
        // Given
        Device device = existingDevice;
        Page<Device> page = new PageImpl<>(Collections.singletonList(device));
        when(deviceRepository.findAll(any(PageRequest.class))).thenReturn(page);

        // When
        Page<DeviceResponse> result = deviceService.getAllDevices(PageRequest.of(0, 10));

        // Then
        assertThat(result.getContent()).hasSize(1);
        assertThat(result.getContent().get(0).getDevicesn()).isEqualTo("SN-1");
    }
}
