package uk.syntel.hackathon.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import uk.syntel.hackathon.app.beans.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {

}
