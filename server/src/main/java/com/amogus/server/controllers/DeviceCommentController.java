package com.amogus.server.controllers;

import com.amogus.server.models.DeviceComment;
import com.amogus.server.services.DeviceCommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/devicecomments")
public class DeviceCommentController {

    private final DeviceCommentService deviceCommentService;

    @Autowired
    public DeviceCommentController(DeviceCommentService deviceCommentService) {
        this.deviceCommentService = deviceCommentService;
    }

    // Create a new comment
    @PostMapping
    public ResponseEntity<DeviceComment> createComment(@RequestBody DeviceComment deviceComment) {
        DeviceComment savedComment = deviceCommentService.createComment(deviceComment);
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
    public ResponseEntity<DeviceComment> getCommentById(@PathVariable Integer id) {
        Optional<DeviceComment> comment = deviceCommentService.getCommentById(id);
        return comment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update a comment by ID
    @PutMapping("/{id}")
    public ResponseEntity<DeviceComment> updateComment(
            @PathVariable Integer id, @RequestBody DeviceComment deviceComment) {
        DeviceComment updatedComment = deviceCommentService.updateComment(id, deviceComment);
        return updatedComment != null ? ResponseEntity.ok(updatedComment) : ResponseEntity.notFound().build();
    }

    // Delete a comment by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable Integer id) {
        return deviceCommentService.deleteComment(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
