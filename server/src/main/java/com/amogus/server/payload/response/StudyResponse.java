package com.amogus.server.payload.response;

import com.amogus.server.models.Device;
import com.amogus.server.models.Patient;


public class StudyResponse {
    private Integer id;
    private Patient patient;
    private UserResponse user;
    private Device device;
    private String status;
    private String notes;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public UserResponse getUser() {
        return user;
    }

    public void setUser(UserResponse user) {
        this.user = user;
    }

    public Device getDevice() {
        return device;
    }

    public void setDevice(Device deviceid) {
        this.device = deviceid;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
