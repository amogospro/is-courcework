package com.amogus.server.security;

import com.amogus.server.models.Userprofile;
import com.amogus.server.repositories.UserProfileRepository;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class SusCustomUserDetailsService implements UserDetailsService {
    private final UserProfileRepository userProfileRepository;

    public SusCustomUserDetailsService(UserProfileRepository userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Userprofile user = userProfileRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        System.out.println(user.getUserRoles().toString());
        return new CustomUserDetails(user);
    }
}
