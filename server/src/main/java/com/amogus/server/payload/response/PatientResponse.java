package com.amogus.server.payload.response;

import com.amogus.server.models.Person;


public class PatientResponse {
    private Integer id;
    private Person person;
    private String insurancepolicynumber;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public String getInsurancepolicynumber() {
        return insurancepolicynumber;
    }

    public void setInsurancepolicynumber(String insurancepolicynumber) {
        this.insurancepolicynumber = insurancepolicynumber;
    }
}
