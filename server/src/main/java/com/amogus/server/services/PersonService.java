package com.amogus.server.services;

import com.amogus.server.models.Person;
import com.amogus.server.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    public Optional<Person> getPersonById(Integer id) {
        return personRepository.findById(id);
    }

    public Person createPerson(Person person) {
        return personRepository.save(person);
    }

    public Person updatePerson(Integer id, Person personDetails) {
        return personRepository.findById(id)
                .map(person -> {
                    person.setFirstname(personDetails.getFirstname());
                    person.setLastname(personDetails.getLastname());
                    person.setMiddlename(personDetails.getMiddlename());
                    person.setDateofbirth(personDetails.getDateofbirth());
                    person.setPhonenumber(personDetails.getPhonenumber());
                    person.setEmail(personDetails.getEmail());
                    person.setAddress(personDetails.getAddress());
                    person.setGender(personDetails.getGender());
                    return personRepository.save(person);
                })
                .orElseThrow(() -> new RuntimeException("Person not found with id " + id));
    }

    public void deletePerson(Integer id) {
        personRepository.deleteById(id);
    }
}
