package com.amogus.server.security;

import com.amogus.server.models.Role;
import com.amogus.server.models.Userprofile;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.stream.Collectors;

public class CustomUserDetails implements UserDetails {
    private final Userprofile user;

    public CustomUserDetails(Userprofile user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return user.getUserRoles().stream()
                .map(userRole -> new SimpleGrantedAuthority(userRole.getRole().getRolename()))
                .collect(Collectors.toList());
    }

    public Userprofile getUser() {
        return user;
    }

    @Override
    public String getPassword() {
        return user.getPasswordhash();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    // Implement other methods as needed
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
