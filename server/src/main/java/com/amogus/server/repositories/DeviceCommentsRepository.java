package com.amogus.server.repositories;

import com.amogus.server.models.DeviceComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceCommentsRepository extends JpaRepository<DeviceComment, Integer> {
    // You can define custom queries here if needed
}
