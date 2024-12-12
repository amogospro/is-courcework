package com.amogus.server.services;

import com.amogus.server.models.Device;
import com.amogus.server.models.DeviceComment;
import com.amogus.server.models.Userprofile;
import com.amogus.server.repositories.DeviceCommentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@Service
public class DeviceCommentService {

    private final DeviceCommentsRepository deviceCommentRepository;

    @Autowired
    public DeviceCommentService(DeviceCommentsRepository deviceCommentRepository) {
        this.deviceCommentRepository = deviceCommentRepository;
    }

    // Create a new comment
    public DeviceComment createComment(Device device, Userprofile user, String comment) {
        DeviceComment deviceComment = new DeviceComment();

        deviceComment.setDevice(device);
        deviceComment.setCommenttext(comment);
        deviceComment.setUserid(user);
        deviceComment.setTimestamp(Instant.now());

        return deviceCommentRepository.save(deviceComment);
    }

    // Read all comments
    public List<DeviceComment> getAllComments() {
        return deviceCommentRepository.findAll();
    }

    // Read a single comment by ID
    public Optional<DeviceComment> getCommentById(Integer id) {
        return deviceCommentRepository.findById(id);
    }

    // Update a comment
    public DeviceComment updateComment(Integer id, DeviceComment deviceComment) {
        if (!deviceCommentRepository.existsById(id)) {
            return null;
        }
        deviceComment.setId(id);
        return deviceCommentRepository.save(deviceComment);
    }

    // Delete a comment by ID
    public boolean deleteComment(Integer id) {
        if (deviceCommentRepository.existsById(id)) {
            deviceCommentRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
