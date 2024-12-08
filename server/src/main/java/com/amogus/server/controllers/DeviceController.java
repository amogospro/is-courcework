package com.amogus.server.controllers;

import com.amogus.server.models.Device;
import com.amogus.server.models.Device;
import com.amogus.server.services.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/devices")
public class DeviceController {

    private final DeviceService deviceService;

    @Autowired
    public DeviceController(DeviceService deviceService) {
        this.deviceService = deviceService;
    }

    // Create or update a device
    @PostMapping
    public ResponseEntity<Device> createDevice(@RequestBody Device device) {
        Device savedDevice = deviceService.createDevice(device);
        return new ResponseEntity<>(savedDevice, HttpStatus.CREATED);
    }

    // Get all devices
    @GetMapping
    public ResponseEntity<Page<Device>> getAllDevices(Pageable pageable) {
        Page<Device> devices = deviceService.getAllDevices(pageable);
        return new ResponseEntity<>(devices, HttpStatus.OK);
    }

    // Get a device by its ID
    @GetMapping("/{id}")
    public ResponseEntity<Device> getDeviceById(@PathVariable Integer id) {
        Device device = deviceService.getDeviceById(id);
        return new ResponseEntity<>(device, HttpStatus.OK);
    }


    // Update a device by its ID
    @PutMapping("/{id}")
    public ResponseEntity<Device> updateDevice(@PathVariable Integer id, @RequestBody Device device) {
        Device existingDevice = deviceService.getDeviceById(id);
        if (existingDevice != null) {
            device.setId(id);  // Ensure the ID is set for updating
            Device updatedDevice = deviceService.updateDevice(device);
            return new ResponseEntity<>(updatedDevice, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a device by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDevice(@PathVariable Integer id) {
        Device device = deviceService.getDeviceById(id);
        if (device != null) {
            deviceService.deleteDevice(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
