package com.amogus.server.payload.response;

import com.amogus.server.models.Person;
import com.amogus.server.models.UserRole;
import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.Instant;
import java.util.Set;

public class UserResponse {
    private Integer id;

    private Person person;

    private String username;
    private Instant dateregistered;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person personid) {
        this.person = personid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Instant getDateregistered() {
        return dateregistered;
    }

    public void setDateregistered(Instant dateregistered) {
        this.dateregistered = dateregistered;
    }
}
