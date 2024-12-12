package com.amogus.server.controllers;

import com.amogus.server.models.Device;
import com.amogus.server.models.DeviceComment;
import com.amogus.server.models.Userprofile;
import com.amogus.server.security.CustomUserDetails;
import com.amogus.server.services.DeviceCommentService;
import com.amogus.server.services.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/devicecomments")
public class DeviceCommentController {

    private final DeviceCommentService deviceCommentService;
    private final DeviceService deviceService;

    @Autowired
    public DeviceCommentController(DeviceCommentService deviceCommentService, DeviceService deviceService) {
        this.deviceCommentService = deviceCommentService;
        this.deviceService = deviceService;
    }

    // Create a new comment
    @PostMapping
    @PreAuthorize("hasAuthority('Техперсонал')")
    public ResponseEntity<DeviceComment> createComment(
            @RequestParam() Integer deviceid,
            @RequestBody String deviceComment,
            Authentication authentication
    ) {
        Userprofile user = ((CustomUserDetails) authentication.getPrincipal()).getUser();
        Device device = deviceService.getDeviceById(deviceid);
        DeviceComment savedComment = deviceCommentService.createComment(device, user, deviceComment);
        return new ResponseEntity<>(savedComment, HttpStatus.CREATED);
    }

    // Get all comments
    @GetMapping
    public ResponseEntity<List<DeviceComment>> getAllComments() {
        List<DeviceComment> comments = deviceCommentService.getAllComments();
        return new ResponseEntity<>(comments, HttpStatus.OK);
    }

    // Get a comment by ID
    @GetMapping("/{id}")
    @PreAuthorize("hasAuthority('Техперсонал')")
    public ResponseEntity<DeviceComment> getCommentById(@PathVariable Integer id) {
        Optional<DeviceComment> comment = deviceCommentService.getCommentById(id);
        return comment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update a comment by ID
    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('Техперсонал')")
    public ResponseEntity<DeviceComment> updateComment(
            @PathVariable Integer id, @RequestBody DeviceComment deviceComment) {
        DeviceComment updatedComment = deviceCommentService.updateComment(id, deviceComment);
        return updatedComment != null ? ResponseEntity.ok(updatedComment) : ResponseEntity.notFound().build();
    }

    // Delete a comment by ID
    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('Техперсонал')")
    public ResponseEntity<Void> deleteComment(@PathVariable Integer id) {
        return deviceCommentService.deleteComment(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
