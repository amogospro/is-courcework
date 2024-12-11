package com.amogus.server.repositories;

import com.amogus.server.models.UserRole;
import com.amogus.server.models.UserRoleId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRoleRepository extends JpaRepository<UserRole, UserRoleId> {
}
