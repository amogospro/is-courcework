package com.amogus.server.payload.response;

import com.amogus.server.models.Device;
import com.amogus.server.models.Patient;


public class StudyResponse {
    private Integer id;
    private Patient patient;
    private UserResponse user;
    private DeviceResponse device;
    private String status;
    private String notes;

    private String dicomid;

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

    public DeviceResponse getDevice() {
        return device;
    }

    public void setDevice(DeviceResponse device) {
        this.device = device;
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

    public String getDicomid() {
        return dicomid;
    }

    public void setDicomid(String dicomid) {
        this.dicomid = dicomid;
    }
}
