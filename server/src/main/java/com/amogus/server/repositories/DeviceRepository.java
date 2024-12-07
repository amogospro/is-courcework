package com.amogus.server.repositories;

import com.amogus.server.models.Device;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceRepository extends JpaRepository<Device, Integer> {
    // You can define custom queries here if needed
}
