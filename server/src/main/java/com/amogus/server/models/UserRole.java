package com.amogus.server.models;

import com.amogus.server.payload.response.RoleResponse;
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
    private Userprofile user;

    @MapsId("roleid")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "roleid", nullable = false)
    private Role role;

    public UserRoleId getId() {
        return id;
    }

    public void setId(UserRoleId id) {
        this.id = id;
    }

    public Userprofile getUser() {
        return user;
    }

    public void setUser(Userprofile userid) {
        this.user = userid;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role roleid) {
        this.role = roleid;
    }

    public RoleResponse toResponse() {
        RoleResponse roleResponse = new RoleResponse();
        roleResponse.setId(role.getId());
        roleResponse.setRolename(role.getRolename());
        roleResponse.setDescription(role.getDescription());
        
        return roleResponse;
    }
}