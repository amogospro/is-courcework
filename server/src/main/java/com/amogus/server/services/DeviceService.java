package com.amogus.server.services;

import com.amogus.server.models.Device;
import com.amogus.server.repositories.DeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    public Page<Device> getAllDevices(Pageable pageable) {
        return deviceRepository.findAll(pageable);
    }

    public Device createDevice(Device device) {
        return deviceRepository.save(device);
    }

    public Device updateDevice(Integer id, Device deviceDetails) {
        return deviceRepository.findById(id)
                .map(device -> {
                    device.setDevicesn(deviceDetails.getDevicesn());
                    device.setStatus(deviceDetails.getStatus());
                    device.setLocation(deviceDetails.getLocation());
                    return deviceRepository.save(device);
                })
                .orElseThrow(() -> new RuntimeException("Device not found with id " + id));
    }

    public void deleteDevice(Integer id) {
        deviceRepository.deleteById(id);
    }


    public Device getDeviceById(Integer id) {
        return deviceRepository.findById(id).orElse(null); // Fetch by ID, return null if not found
    }

    public Device updateDevice(Device device) {
        return deviceRepository.save(device);
    }
}
