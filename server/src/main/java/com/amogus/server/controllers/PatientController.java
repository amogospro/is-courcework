package com.amogus.server.controllers;

import com.amogus.server.dto.PatientRequest;
import com.amogus.server.models.Patient;
import com.amogus.server.models.Person;
import com.amogus.server.services.PatientService;
import com.amogus.server.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/patients")
public class PatientController {

    private final PatientService patientService;
    private final PersonService personService;

    @Autowired
    public PatientController(PatientService patientService, PersonService personService) {
        this.patientService = patientService;
        this.personService = personService;
    }


    @GetMapping
    public ResponseEntity<Page<Patient>> getAllPatients(Pageable pageable) {
        Page<Patient> patients = patientService.getAllPatients(pageable);
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Integer id) {
        Patient patient = patientService.getPatientById(id);
        return new ResponseEntity<>(patient, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Patient> createPatientWithPerson(@RequestBody PatientRequest patientRequest) {
        // Create the Person first
        Person person = patientRequest.getPerson();
        personService.createPerson(person);

        // Now create the Patient with the newly created Person
        Patient patient = new Patient();
        patient.setPerson(person);  // Set the Person object
        patient.setInsurancepolicynumber(patientRequest.getInsurancepolicynumber());

        Patient createdPatient = patientService.createPatient(patient);
        return new ResponseEntity<>(createdPatient, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Patient> updatePatientWithPerson(@PathVariable Integer id, @RequestBody PatientRequest patientRequest) {
        // Fetch the existing patient
        Patient existingPatient = patientService.getPatientById(id);
        if (existingPatient == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Fetch the associated person
        Person existingPerson = existingPatient.getPerson();

        // If person exists, update it with the new data
        Person personToUpdate = patientRequest.getPerson();
        if (personToUpdate != null) {
            existingPerson.setFirstname(personToUpdate.getFirstname());
            existingPerson.setLastname(personToUpdate.getLastname());
            existingPerson.setMiddlename(personToUpdate.getMiddlename());
            existingPerson.setDateofbirth(personToUpdate.getDateofbirth());
            existingPerson.setPhonenumber(personToUpdate.getPhonenumber());
            existingPerson.setEmail(personToUpdate.getEmail());
            existingPerson.setAddress(personToUpdate.getAddress());
            existingPerson.setGender(personToUpdate.getGender());
            personService.createPerson(existingPerson);  // Update person in DB
        }

        // Update the insurance policy number
        existingPatient.setInsurancepolicynumber(patientRequest.getInsurancepolicynumber());

        // Save the updated patient
        Patient updatedPatient = patientService.updatePatient(existingPatient);
        return new ResponseEntity<>(updatedPatient, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePatient(@PathVariable Integer id) {
        patientService.deletePatient(id);
        return ResponseEntity.noContent().build();
    }
}
