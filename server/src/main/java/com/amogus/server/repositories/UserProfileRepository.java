package com.amogus.server.repositories;

import com.amogus.server.models.Userprofile;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserProfileRepository extends JpaRepository<Userprofile, Integer> {
    @Query("SELECT u FROM Userprofile u JOIN FETCH u.userRoles ur JOIN FETCH ur.role WHERE u.username = :username")
    Optional<Userprofile> findByUsername(@Param("username") String username);

    Boolean existsByUsername(String username);
}
