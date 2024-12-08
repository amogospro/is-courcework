package com.amogus.server.repositories;

import com.amogus.server.models.Study;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudyRepository extends JpaRepository<Study, Integer> {
}
