package com.amogus.server.controllers;

import com.amogus.server.models.Userprofile;
import com.amogus.server.models.Person;
import com.amogus.server.services.UserService;
import com.amogus.server.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<Page<Userprofile>> getAllUsers(Pageable pageable) {
        Page<Userprofile> patients = userService.getAllUsers(pageable);
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Userprofile> getUserprofileById(@PathVariable Integer id) {
        Userprofile patient = userService.getUserById(id);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }
}
