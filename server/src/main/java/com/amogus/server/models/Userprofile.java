package com.amogus.server.models;

import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.Instant;

@Entity
@Table(name = "userprofile")
public class Userprofile {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userprofile_id_gen")
    @SequenceGenerator(name = "userprofile_id_gen", sequenceName = "userprofile_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private Integer id;

    @OneToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "personid", nullable = false)
    private Person person;

    @Column(name = "username", nullable = false, length = Integer.MAX_VALUE)
    private String username;

    @Column(name = "passwordhash", nullable = false, length = Integer.MAX_VALUE)
    private String passwordhash;

    @ColumnDefault("now()")
    @Column(name = "dateregistered", nullable = false)
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

    public String getPasswordhash() {
        return passwordhash;
    }

    public void setPasswordhash(String passwordhash) {
        this.passwordhash = passwordhash;
    }

    public Instant getDateregistered() {
        return dateregistered;
    }

    public void setDateregistered(Instant dateregistered) {
        this.dateregistered = dateregistered;
    }

}