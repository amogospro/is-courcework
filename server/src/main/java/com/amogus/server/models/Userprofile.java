package com.amogus.server.models;

import com.amogus.server.payload.response.UserResponse;
import com.amogus.server.payload.response.UserWithRolesResponse;
import jakarta.persistence.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.Instant;
import java.util.Set;
import java.util.stream.Collectors;

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

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<UserRole> userRoles;

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

    public Set<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }


    public UserResponse toResponse() {
        UserResponse response = new UserResponse();
        response.setId(id);
        response.setPerson(person);
        response.setUsername(username);
        response.setDateregistered(dateregistered);
        return response;
    }

    public UserWithRolesResponse toResponseWithRoles() {
        UserWithRolesResponse response = new UserWithRolesResponse();
        response.setId(id);
        response.setPerson(person);
        response.setUsername(username);
        response.setDateregistered(dateregistered);
        response.setRoles(userRoles.stream().map(UserRole::toResponse).collect(Collectors.toSet()));
        return response;
    }
}