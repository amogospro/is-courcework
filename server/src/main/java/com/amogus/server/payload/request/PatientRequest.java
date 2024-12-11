package com.amogus.server.payload.request;

import com.amogus.server.models.Person;

public class PatientRequest {
    private Person person;
    private String insurancepolicynumber;

    // Getters and Setters
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
