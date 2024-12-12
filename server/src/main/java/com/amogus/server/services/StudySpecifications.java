package com.amogus.server.services;

import com.amogus.server.models.Patient;
import com.amogus.server.models.Person;
import com.amogus.server.models.Study;
import com.amogus.server.models.Userprofile;
import org.springframework.data.jpa.domain.Specification;
import jakarta.persistence.criteria.*;

import java.time.LocalDate;
import java.util.Date;

public class StudySpecifications {

    public static Specification<Study> hasPatientName(String name) {
        return (root, query, criteriaBuilder) -> {
            if (name == null || name.isEmpty()) {
                return criteriaBuilder.conjunction();
            }
            Join<Study, Patient> patient = root.join("patient", JoinType.INNER);
            Join<Patient, Person> person = patient.join("person", JoinType.INNER);
            return criteriaBuilder.or(
                    criteriaBuilder.like(criteriaBuilder.lower(person.get("firstname")), "%" + name.toLowerCase() + "%"),
                    criteriaBuilder.like(criteriaBuilder.lower(person.get("lastname")), "%" + name.toLowerCase() + "%")
            );
        };
    }

    public static Specification<Study> hasDoctorName(String name) {
        return (root, query, criteriaBuilder) -> {
            if (name == null || name.isEmpty()) {
                return criteriaBuilder.conjunction();
            }
            Join<Study, Userprofile> userProfile = root.join("user", JoinType.INNER);
            Join<Userprofile, Person> person = userProfile.join("person", JoinType.INNER);
            return criteriaBuilder.or(
                    criteriaBuilder.like(criteriaBuilder.lower(person.get("firstname")), "%" + name.toLowerCase() + "%"),
                    criteriaBuilder.like(criteriaBuilder.lower(person.get("lastname")), "%" + name.toLowerCase() + "%")
            );
        };
    }

    public static Specification<Study> hasDate(LocalDate date) {
        return (root, query, criteriaBuilder) -> {
            if (date == null) {
                return criteriaBuilder.conjunction();
            }
            return criteriaBuilder.equal(root.get("date"), date);
        };
    }
}
