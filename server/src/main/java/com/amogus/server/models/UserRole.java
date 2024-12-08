package com.amogus.server.models;

import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name = "userrole")
public class UserRole {
    @SequenceGenerator(name = "userrole_id_gen", sequenceName = "study_id_seq", allocationSize = 1)
    @EmbeddedId
    private UserRoleId id;

    @MapsId("userid")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "userid", nullable = false)
    private Userprofile userid;

    @MapsId("roleid")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "roleid", nullable = false)
    private Role roleid;

    public UserRoleId getId() {
        return id;
    }

    public void setId(UserRoleId id) {
        this.id = id;
    }

    public Userprofile getUserid() {
        return userid;
    }

    public void setUserid(Userprofile userid) {
        this.userid = userid;
    }

    public Role getRoleid() {
        return roleid;
    }

    public void setRoleid(Role roleid) {
        this.roleid = roleid;
    }

}