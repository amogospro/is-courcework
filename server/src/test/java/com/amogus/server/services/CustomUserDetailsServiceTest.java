package com.amogus.server.services;

import com.amogus.server.models.Userprofile;
import com.amogus.server.repositories.UserProfileRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CustomUserDetailsServiceTest {

    @Mock
    private UserProfileRepository userProfileRepository;

    @InjectMocks
    private CustomUserDetailsService customUserDetailsService;

    @Test
    void loadUserByUsername_returnsUserDetails() {
        // Given
        Userprofile user = new Userprofile();
        user.setUsername("john");
        user.setPasswordhash("pwd");
        when(userProfileRepository.findByUsername("john")).thenReturn(Optional.of(user));

        // When
        UserDetails details = customUserDetailsService.loadUserByUsername("john");

        // Then
        assertThat(details.getUsername()).isEqualTo("john");
        assertThat(details.getPassword()).isEqualTo("pwd");
        assertThat(details.getAuthorities()).extracting("authority").contains("USER");
    }

    @Test
    void loadUserByUsername_whenMissing_throws() {
        // Given
        when(userProfileRepository.findByUsername("missing")).thenReturn(Optional.empty());

        // When / Then
        assertThatThrownBy(() -> customUserDetailsService.loadUserByUsername("missing"))
                .isInstanceOf(UsernameNotFoundException.class)
                .hasMessageContaining("missing");
    }
}
