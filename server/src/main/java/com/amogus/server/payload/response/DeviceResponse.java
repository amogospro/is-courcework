package com.amogus.server.payload.response;

import com.amogus.server.models.DeviceComment;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;

import java.util.List;

public class DeviceResponse {
    private Integer id;
    private String devicesn;
    private String location;
    private String status;
    private List<DeviceCommentResponse> comments;

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


    public List<DeviceCommentResponse> getComments() {
        return comments;
    }

    public void setComments(List<DeviceCommentResponse> comments) {
        this.comments = comments;
    }


}
