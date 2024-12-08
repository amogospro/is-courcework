package com.amogus.server.repositories;

import com.amogus.server.models.Userprofile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Userprofile, Integer> {
    // Custom query methods can be added here
}
