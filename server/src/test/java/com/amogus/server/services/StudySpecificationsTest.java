package com.amogus.server.services;

import com.amogus.server.models.Patient;
import com.amogus.server.models.Person;
import com.amogus.server.models.Study;
import com.amogus.server.models.Userprofile;
import jakarta.persistence.criteria.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Answers;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class StudySpecificationsTest {

    @Mock(answer = Answers.RETURNS_DEEP_STUBS)
    private Root<Study> root;
    @Mock
    private CriteriaQuery<?> query;
    @Mock
    private CriteriaBuilder criteriaBuilder;
    @Mock
    private Predicate predicate;

    @Test
    void hasPatientName_whenNull_returnsConjunction() {
        // Given
        when(criteriaBuilder.conjunction()).thenReturn(predicate);

        // When
        Predicate result = StudySpecifications.hasPatientName(null).toPredicate(root, query, criteriaBuilder);

        // Then
        assertThat(result).isSameAs(predicate);
    }

    @Test
    void hasPatientName_buildsOrPredicateForName() {
        // Given
        @SuppressWarnings("unchecked")
        Join<Study, Patient> patientJoin = mock(Join.class, Answers.RETURNS_DEEP_STUBS);
        @SuppressWarnings("unchecked")
        Join<Patient, Person> personJoin = mock(Join.class, Answers.RETURNS_DEEP_STUBS);
        @SuppressWarnings("unchecked")
        Path<String> first = mock(Path.class);
        @SuppressWarnings("unchecked")
        Path<String> last = mock(Path.class);
        when(root.join("patient", JoinType.INNER)).thenReturn((Join) patientJoin);
        when(patientJoin.join("person", JoinType.INNER)).thenReturn((Join) personJoin);
        when(personJoin.get("firstname")).thenReturn((Path) first);
        when(personJoin.get("lastname")).thenReturn((Path) last);

        Expression<String> lowerFirst = mock(Expression.class);
        Expression<String> lowerLast = mock(Expression.class);
        Predicate likeFirst = mock(Predicate.class);
        Predicate likeLast = mock(Predicate.class);
        Predicate orPredicate = mock(Predicate.class);

        when(criteriaBuilder.lower((Expression<String>) first)).thenReturn(lowerFirst);
        when(criteriaBuilder.lower((Expression<String>) last)).thenReturn(lowerLast);
        when(criteriaBuilder.like(lowerFirst, "%john%")).thenReturn(likeFirst);
        when(criteriaBuilder.like(lowerLast, "%john%")).thenReturn(likeLast);
        when(criteriaBuilder.or(likeFirst, likeLast)).thenReturn(orPredicate);

        // When
        Predicate result = StudySpecifications.hasPatientName("john").toPredicate(root, query, criteriaBuilder);

        // Then
        assertThat(result).isSameAs(orPredicate);
    }

    @Test
    void hasDoctorName_returnsConjunctionWhenEmpty() {
        // Given
        when(criteriaBuilder.conjunction()).thenReturn(predicate);

        // When
        Predicate result = StudySpecifications.hasDoctorName("").toPredicate(root, query, criteriaBuilder);

        // Then
        assertThat(result).isSameAs(predicate);
    }

    @Test
    void hasDoctorName_buildsOrPredicateForName() {
        // Given
        @SuppressWarnings("unchecked")
        Join<Study, Userprofile> userJoin = mock(Join.class, Answers.RETURNS_DEEP_STUBS);
        @SuppressWarnings("unchecked")
        Join<Userprofile, Person> personJoin = mock(Join.class, Answers.RETURNS_DEEP_STUBS);
        @SuppressWarnings("unchecked")
        Path<String> first = mock(Path.class);
        @SuppressWarnings("unchecked")
        Path<String> last = mock(Path.class);
        when(root.join("user", JoinType.INNER)).thenReturn((Join) userJoin);
        when(userJoin.join("person", JoinType.INNER)).thenReturn((Join) personJoin);
        when(personJoin.get("firstname")).thenReturn((Path) first);
        when(personJoin.get("lastname")).thenReturn((Path) last);

        Expression<String> lowerFirst = mock(Expression.class);
        Expression<String> lowerLast = mock(Expression.class);
        Predicate likeFirst = mock(Predicate.class);
        Predicate likeLast = mock(Predicate.class);
        Predicate orPredicate = mock(Predicate.class);

        when(criteriaBuilder.lower((Expression<String>) first)).thenReturn(lowerFirst);
        when(criteriaBuilder.lower((Expression<String>) last)).thenReturn(lowerLast);
        when(criteriaBuilder.like(lowerFirst, "%doc%")).thenReturn(likeFirst);
        when(criteriaBuilder.like(lowerLast, "%doc%")).thenReturn(likeLast);
        when(criteriaBuilder.or(likeFirst, likeLast)).thenReturn(orPredicate);

        // When
        Predicate result = StudySpecifications.hasDoctorName("doc").toPredicate(root, query, criteriaBuilder);

        // Then
        assertThat(result).isSameAs(orPredicate);
    }

    @Test
    void hasDate_handlesNullAndValue() {
        // Given
        when(criteriaBuilder.conjunction()).thenReturn(predicate);
        Predicate equalPredicate = mock(Predicate.class);
        Path<Object> datePath = mock(Path.class);
        when(root.get("date")).thenReturn(datePath);
        when(criteriaBuilder.equal(datePath, LocalDate.of(2025, 1, 1))).thenReturn(equalPredicate);

        // When
        Predicate nullResult = StudySpecifications.hasDate(null).toPredicate(root, query, criteriaBuilder);
        Predicate dateResult = StudySpecifications.hasDate(LocalDate.of(2025, 1, 1)).toPredicate(root, query, criteriaBuilder);

        // Then
        assertThat(nullResult).isSameAs(predicate);
        assertThat(dateResult).isSameAs(equalPredicate);
    }
}
