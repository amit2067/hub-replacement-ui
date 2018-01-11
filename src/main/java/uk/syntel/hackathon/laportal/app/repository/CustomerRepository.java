package uk.syntel.hackathon.laportal.app.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import uk.syntel.hackathon.laportal.app.beans.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
	
	List<Customer> findAll();

}
