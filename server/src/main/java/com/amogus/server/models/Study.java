package com.amogus.server.models;

import com.amogus.server.payload.response.StudyResponse;
import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "study")
public class Study {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "study_id_gen")
    @SequenceGenerator(name = "study_id_gen", sequenceName = "study_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "patientid", nullable = false)
    private Patient patient;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.SET_NULL)
    @JoinColumn(name = "userid", nullable = false)
    private Userprofile user;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.SET_NULL)
    @JoinColumn(name = "deviceid", nullable = false)
    private Device device;

    @ColumnDefault("'Planned'")
    @Column(name = "status", nullable = false, length = 20)
    private String status;


    @Column(name = "dicomid")
    private String dicomid;

    @Column(name = "notes", length = Integer.MAX_VALUE)
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

    public Userprofile getUser() {
        return user;
    }

    public void setUser(Userprofile userid) {
        this.user = userid;
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

    public String getDicomid() {
        return dicomid;
    }

    public void setDicomid(String dicomid) {
        this.dicomid = dicomid;
    }

    public StudyResponse toResponse() {
        StudyResponse response = new StudyResponse();
        response.setId(id);
        response.setPatient(patient);
        response.setUser(user.toResponse());
        response.setDevice(device.toResponse());
        response.setStatus(status);
        response.setNotes(notes);
        response.setDicomid(dicomid);

        return response;
    }
}