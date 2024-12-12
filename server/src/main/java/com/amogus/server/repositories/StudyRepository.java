package com.amogus.server.repositories;

import com.amogus.server.models.Study;
import com.amogus.server.payload.response.StudyDataResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudyRepository extends JpaRepository<Study, Integer>, JpaSpecificationExecutor<Study> {

    @Query(nativeQuery = true, value =
            "SELECT * FROM get_study_data(:studyId)")
    Optional<StudyDataResponse> getStudyData(@Param("studyId") Integer studyId);

}
