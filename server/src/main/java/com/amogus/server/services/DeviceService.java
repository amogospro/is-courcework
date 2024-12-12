package com.amogus.server.services;

import com.amogus.server.models.Device;
import com.amogus.server.payload.response.DeviceResponse;
import com.amogus.server.repositories.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DeviceService {

    private final DeviceRepository deviceRepository;

    @Autowired
    public DeviceService(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    public Page<DeviceResponse> getAllDevices(Pageable pageable) {
        return deviceRepository.findAll(pageable).map(Device::toResponse);
    }

    public DeviceResponse createDevice(Device device) {
        return deviceRepository.save(device).toResponse();
    }

    public DeviceResponse updateDevice(Integer id, Device deviceDetails) {
        return deviceRepository.findById(id)
                .map(device -> {
                    device.setDevicesn(deviceDetails.getDevicesn());
                    device.setStatus(deviceDetails.getStatus());
                    device.setLocation(deviceDetails.getLocation());
                    device.setComments(deviceDetails.getComments());
                    return deviceRepository.save(device);
                }).map(Device::toResponse)
                .orElseThrow(() -> new RuntimeException("Device not found with id " + id));
    }

    public void deleteDevice(Integer id) {
        deviceRepository.deleteById(id);
    }


    public Device getDeviceById(Integer id) {
        return deviceRepository.findById(id).orElse(null); // Fetch by ID, return null if not found
    }

    public DeviceResponse updateDevice(Device device) {
        return deviceRepository.save(device).toResponse();
    }
}
