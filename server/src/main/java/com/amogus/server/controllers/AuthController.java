package com.amogus.server.controllers;

import com.amogus.server.models.*;
import com.amogus.server.payload.request.LoginRequest;
import com.amogus.server.payload.request.SignupRequest;
import com.amogus.server.payload.response.JwtResponse;
import com.amogus.server.repositories.RoleRepository;
import com.amogus.server.repositories.UserProfileRepository;
import com.amogus.server.repositories.UserRoleRepository;
import com.amogus.server.security.JwtUtils;
import com.amogus.server.services.DeviceService;
import com.amogus.server.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserProfileRepository userProfileRepository;

    @Autowired
    RoleRepository roleRepository;

    private final PersonService personService;

    @Autowired
    public AuthController(PersonService personService) {
        this.personService = personService;
    }

    @Autowired
    UserRoleRepository userRoleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

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

        // Assuming you have a method to find a Person by ID or create one
        // user.setPerson(personService.findById(signUpRequest.getPersonId()));
        // For simplicity, let's assume person is already handled

        userProfileRepository.save(user);

        // Assign default role
        Role userRole = roleRepository.findByRolename("Врач")
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));

        UserRole userRoleEntry = new UserRole();
        userRoleEntry.setId(new UserRoleId());
        userRoleEntry.getId().setUserid(user.getId());
        userRoleEntry.getId().setRoleid(userRole.getId());
        userRoleEntry.setUser(user);
        userRoleEntry.setRole(userRole);
        userRoleRepository.save(userRoleEntry);

        return ResponseEntity.ok("User registered successfully!");
    }
}
