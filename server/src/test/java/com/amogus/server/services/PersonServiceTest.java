package com.amogus.server.services;

import com.amogus.server.models.Person;
import com.amogus.server.repositories.PersonRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.Instant;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PersonServiceTest {

    @Mock
    private PersonRepository personRepository;

    @InjectMocks
    private PersonService personService;

    @Test
    void updatePerson_updatesAllFields() {
        // Given
        Person existing = new Person();
        existing.setId(1);
        existing.setFirstname("old");

        Person input = new Person();
        input.setFirstname("new");
        input.setLastname("last");
        input.setMiddlename("mid");
        input.setDateofbirth(java.time.LocalDate.now());
        input.setPhonenumber("123");
        input.setEmail("mail");
        input.setAddress("addr");
        input.setGender("M");

        when(personRepository.findById(1)).thenReturn(Optional.of(existing));
        when(personRepository.save(any(Person.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // When
        Person result = personService.updatePerson(1, input);

        // Then
        assertThat(result.getFirstname()).isEqualTo("new");
        assertThat(result.getLastname()).isEqualTo("last");
        assertThat(result.getEmail()).isEqualTo("mail");
        verify(personRepository).save(existing);
    }

    @Test
    void updatePerson_whenMissing_throws() {
        // Given
        when(personRepository.findById(42)).thenReturn(Optional.empty());

        // When / Then
        assertThatThrownBy(() -> personService.updatePerson(42, new Person()))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("Person not found");
    }
}
