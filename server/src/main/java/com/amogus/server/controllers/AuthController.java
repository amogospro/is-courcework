package com.amogus.server.controllers;

import com.amogus.server.models.*;
import com.amogus.server.payload.request.LoginRequest;
import com.amogus.server.payload.request.SignupRequest;
import com.amogus.server.payload.response.JwtResponse;
import com.amogus.server.repositories.RoleRepository;
import com.amogus.server.repositories.UserProfileRepository;
import com.amogus.server.repositories.UserRoleRepository;
import com.amogus.server.security.CustomUserDetails;
import com.amogus.server.security.JwtUtils;
import com.amogus.server.services.AuditLogService;
import com.amogus.server.services.DeviceService;
import com.amogus.server.services.PersonService;
import com.amogus.server.services.UserService;
import org.springframework.http.*;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserProfileRepository userProfileRepository;
    private final RoleRepository roleRepository;
    private final PersonService personService;
    private final UserService userService;
    private final AuditLogService auditLogService;
    private final UserRoleRepository userRoleRepository;
    private final PasswordEncoder encoder;
    private final JwtUtils jwtUtils;

    public AuthController(
            AuthenticationManager authenticationManager,
            UserProfileRepository userProfileRepository,
            RoleRepository roleRepository,
            PersonService personService,
            UserService userService,
            AuditLogService auditLogService,
            UserRoleRepository userRoleRepository,
            PasswordEncoder encoder,
            JwtUtils jwtUtils
    ) {
        this.authenticationManager = authenticationManager;
        this.userProfileRepository = userProfileRepository;
        this.roleRepository = roleRepository;
        this.personService = personService;
        this.userService = userService;
        this.auditLogService = auditLogService;
        this.userRoleRepository = userRoleRepository;
        this.encoder = encoder;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken((UserDetails) authentication.getPrincipal());

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        Userprofile user = ((CustomUserDetails) authentication.getPrincipal()).getUser();

        auditLogService.createAuditLog(user, "Вход");

        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userProfileRepository.findByUsername(signUpRequest.getUsername()).isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Username is already taken!");
        }

        // Create new user's account
        Userprofile user = new Userprofile();
        user.setUsername(signUpRequest.getUsername());
        user.setPasswordhash(encoder.encode(signUpRequest.getPassword()));
        user.setDateregistered(Instant.now());

        Person person = personService.createPerson(signUpRequest.getPerson());
        user.setPerson(person);
        userProfileRepository.save(user);

        Userprofile first = userService.getUserById(1);
        if (first == null) {
            userService.addRole(user, "Администратор");
        }

        return ResponseEntity.ok("User registered successfully!");
    }
}
