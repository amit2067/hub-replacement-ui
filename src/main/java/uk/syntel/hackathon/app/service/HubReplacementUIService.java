package uk.syntel.hackathon.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import uk.syntel.hackathon.app.beans.Application;
import uk.syntel.hackathon.app.beans.Customer;
import uk.syntel.hackathon.app.repository.ApplicationRepository;
import uk.syntel.hackathon.app.repository.CustomerRepository;

@Service
public class HubReplacementUIService {

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private ApplicationRepository appRepository;

	public Customer createCustomer(Customer customer) {
		Customer createdCustomer = customerRepository.save(customer);
		System.out.println(createdCustomer);
		return createdCustomer;
	}

	public Application createApplication(Application application) {
		Application createdApp = appRepository.save(application);
		System.out.println(createdApp);
		return createdApp;
	}

}
