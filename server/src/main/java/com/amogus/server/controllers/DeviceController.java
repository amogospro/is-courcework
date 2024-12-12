package com.amogus.server.controllers;

import com.amogus.server.models.Device;
import com.amogus.server.models.Device;
import com.amogus.server.payload.response.DeviceResponse;
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
    public ResponseEntity<DeviceResponse> createDevice(@RequestBody Device device) {
        DeviceResponse savedDevice = deviceService.createDevice(device);
        return new ResponseEntity<>(savedDevice, HttpStatus.CREATED);
    }

    // Get all devices
    @GetMapping
    public ResponseEntity<Page<DeviceResponse>> getAllDevices(Pageable pageable) {
        Page<DeviceResponse> devices = deviceService.getAllDevices(pageable);
        return new ResponseEntity<>(devices, HttpStatus.OK);
    }

    // Get a device by its ID
    @GetMapping("/{id}")
    public ResponseEntity<DeviceResponse> getDeviceById(@PathVariable Integer id) {
        DeviceResponse device = deviceService.getDeviceById(id).toResponse();
        return new ResponseEntity<>(device, HttpStatus.OK);
    }


    // Update a device by its ID
    @PutMapping("/{id}")
    public ResponseEntity<DeviceResponse> updateDevice(@PathVariable Integer id, @RequestBody Device device) {
        Device existingDevice = deviceService.getDeviceById(id);
        if (existingDevice != null) {
            device.setId(id);  // Ensure the ID is set for updating
            DeviceResponse updatedDevice = deviceService.updateDevice(device);
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
