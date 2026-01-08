package com.amogus.server.services;

import com.amogus.server.models.*;
import com.amogus.server.repositories.RoleRepository;
import com.amogus.server.repositories.UserProfileRepository;
import com.amogus.server.repositories.UserRoleRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import java.util.Collections;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserProfileRepository userRepository;
    @Mock
    private RoleRepository roleRepository;
    @Mock
    private UserRoleRepository userRoleRepository;

    private UserService userService;

    @BeforeEach
    void initService() {
        userService = new UserService(userRepository, roleRepository, userRoleRepository);
    }

    @Test
    void getAllUsers_delegatesToRepository() {
        // Given
        Page<Userprofile> page = new PageImpl<>(Collections.emptyList());
        when(userRepository.findAll(any(PageRequest.class))).thenReturn(page);

        // When
        Page<Userprofile> result = userService.getAllUsers(PageRequest.of(0, 10));

        // Then
        assertThat(result).isSameAs(page);
        verify(userRepository).findAll(any(PageRequest.class));
    }

    @Test
    void updatePatient_updatesUsernameAndPerson() {
        // Given
        Userprofile existing = new Userprofile();
        existing.setId(1);
        existing.setPerson(new Person());
        existing.setUsername("old");

        Userprofile input = new Userprofile();
        input.setPerson(new Person());
        input.setUsername("new");

        when(userRepository.findById(1)).thenReturn(Optional.of(existing));
        when(userRepository.save(existing)).thenReturn(existing);

        // When
        Userprofile updated = userService.updatePatient(1, input);

        // Then
        assertThat(updated.getUsername()).isEqualTo("new");
        assertThat(updated.getPerson()).isSameAs(input.getPerson());
        verify(userRepository).save(existing);
    }

    @Test
    void addRole_createsUserRoleEntry() {
        // Given
        Userprofile user = new Userprofile();
        user.setId(7);

        Role role = new Role();
        role.setId(9);
        role.setRolename("ROLE");

        when(roleRepository.findByRolename("ROLE")).thenReturn(Optional.of(role));

        // When
        userService.addRole(user, "ROLE");

        // Then
        ArgumentCaptor<UserRole> captor = ArgumentCaptor.forClass(UserRole.class);
        verify(userRoleRepository).save(captor.capture());
        assertThat(captor.getValue()).isNotNull();
    }

    @Test
    void deleteUser_delegatesToRepository() {
        // When
        userService.deleteUser(15);

        // Then
        verify(userRepository).deleteById(15);
    }

    @Test
    void createUser_savesEntity() {
        // Given
        Userprofile user = new Userprofile();
        when(userRepository.save(user)).thenReturn(user);

        // When
        Userprofile result = userService.createUser(user);

        // Then
        assertThat(result).isSameAs(user);
        verify(userRepository).save(user);
    }

    @Test
    void getUserById_returnsNullWhenMissing() {
        // Given
        when(userRepository.findById(22)).thenReturn(Optional.empty());

        // When
        Userprofile result = userService.getUserById(22);

        // Then
        assertThat(result).isNull();
    }

    @Test
    void removeRole_deletesUserRoleEntry() {
        // Given
        Userprofile user = new Userprofile();
        user.setId(3);

        Role role = new Role();
        role.setId(4);
        role.setRolename("ROLE");

        when(roleRepository.findByRolename("ROLE")).thenReturn(Optional.of(role));

        // When
        userService.removeRole(user, "ROLE");

        // Then
        ArgumentCaptor<UserRole> captor = ArgumentCaptor.forClass(UserRole.class);
        verify(userRoleRepository).delete(captor.capture());
        assertThat(captor.getValue()).isNotNull();
    }
}
