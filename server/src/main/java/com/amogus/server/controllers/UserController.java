package com.amogus.server.controllers;

import com.amogus.server.models.Userprofile;
import com.amogus.server.payload.response.UserWithRolesResponse;
import com.amogus.server.services.UserService;
import com.amogus.server.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final PersonService personService;

    @Autowired
    public UserController(UserService userService, PersonService personService) {
        this.userService = userService;
        this.personService = personService;
    }


    @GetMapping
    public ResponseEntity<Page<UserWithRolesResponse>> getAllUsers(Pageable pageable) {
        Page<UserWithRolesResponse> patients = userService.getAllUsers(pageable).map(Userprofile::toResponseWithRoles);
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    @PostMapping("/role")
    @PreAuthorize("hasAuthority('Администратор')")
    public ResponseEntity<?> addRole(
            @RequestParam() Integer id,
            @RequestParam() String role
    ) {
        Userprofile user = userService.getUserById(id);
        userService.addRole(user, role);
        return new ResponseEntity<>("Added", HttpStatus.OK);
    }

    @DeleteMapping("/role")
    @PreAuthorize("hasAuthority('Администратор')")
    public ResponseEntity<?> removeRole(
            @RequestParam() Integer id,
            @RequestParam() String role
    ) {
        Userprofile user = userService.getUserById(id);
        userService.removeRole(user, role);
        return new ResponseEntity<>("Removed", HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Userprofile> getUserprofileById(@PathVariable Integer id) {
        Userprofile patient = userService.getUserById(id);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(Authentication authentication) {
        String username = authentication.getName();
        // Fetch and return user details
        return ResponseEntity.ok("Hello, " + username);
    }

    @PreAuthorize("hasAuthority('Администратор')")
    @GetMapping("/admin")
    public ResponseEntity<?> adminEndpoint() {
        return ResponseEntity.ok("Admin content");
    }
}
