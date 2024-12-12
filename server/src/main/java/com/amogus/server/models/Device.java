package com.amogus.server.models;

import com.amogus.server.payload.response.DeviceCommentResponse;
import com.amogus.server.payload.response.DeviceResponse;
import jakarta.persistence.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@Entity
@Table(name = "device")
public class Device {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "device_id_gen")
    @SequenceGenerator(name = "device_id_gen", sequenceName = "device_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "devicesn", nullable = false, length = Integer.MAX_VALUE)
    private String devicesn;

    @Column(name = "location", nullable = false, length = Integer.MAX_VALUE)
    private String location;

    @Column(name = "status", nullable = false, columnDefinition = "devicestatusenum not null")
    private String status;


    @OneToMany(mappedBy = "device", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<DeviceComment> comments;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDevicesn() {
        return devicesn;
    }

    public void setDevicesn(String devicesn) {
        this.devicesn = devicesn;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Set<DeviceComment> getComments() {
        return comments;
    }

    public void setComments(Set<DeviceComment> comments) {
        this.comments = comments;
    }

    public DeviceResponse toResponse() {
        DeviceResponse response = new DeviceResponse();
        response.setId(id);
        response.setDevicesn(devicesn);
        response.setStatus(status);
        response.setComments(comments.stream().map(DeviceComment::toResponse).collect(Collectors.toList()));
        response.setLocation(location);

        return response;
    }
}