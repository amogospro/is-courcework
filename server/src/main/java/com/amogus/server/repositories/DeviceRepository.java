package com.amogus.server.repositories;

import com.amogus.server.models.Device;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface DeviceRepository extends JpaRepository<Device, Integer> {
    // You can define custom queries here if needed

    @Transactional
    @Query(nativeQuery = true, value =
            "SELECT update_device_status(:deviceId, :newStatus, :userId, :comment)")
    void updateDeviceStatus(@Param("deviceId") Integer deviceId,
                            @Param("newStatus") String newStatus,
                            @Param("userId") Integer userId,
                            @Param("comment") String comment);


}
