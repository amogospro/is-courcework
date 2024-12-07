package com.amogus.server.services;

import com.amogus.server.models.Device;
import com.amogus.server.repositories.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeviceService {

    private final DeviceRepository deviceRepository;

    @Autowired
    public DeviceService(DeviceRepository deviceRepository) {
        this.deviceRepository = deviceRepository;
    }

    // Create or update a device
    public Device saveDevice(Device device) {
        return deviceRepository.save(device);
    }

    // Get all devices
    public List<Device> getAllDevices() {
        return deviceRepository.findAll();
    }

    // Get a device by its ID
    public Optional<Device> getDeviceById(Integer id) {
        return deviceRepository.findById(id);
    }

    // Delete a device by its ID
    public void deleteDevice(Integer id) {
        deviceRepository.deleteById(id);
    }
}
