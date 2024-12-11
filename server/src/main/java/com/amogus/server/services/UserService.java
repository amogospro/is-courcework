package com.amogus.server.services;

import com.amogus.server.models.Userprofile;
import com.amogus.server.repositories.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserProfileRepository userRepository;

    @Autowired
    public UserService(UserProfileRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Page<Userprofile> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    public Userprofile createUser(Userprofile user) {
        return userRepository.save(user);
    }

    public Userprofile updatePatient(Integer id, Userprofile userDetails) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setPerson(userDetails.getPerson());
                    user.setUsername(userDetails.getUsername());
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }

    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }


    public Userprofile getUserById(Integer id) {
        return userRepository.findById(id).orElse(null); // Fetch by ID, return null if not found
    }

    public Userprofile updateUser(Userprofile user) {
        return userRepository.save(user);
    }
}
