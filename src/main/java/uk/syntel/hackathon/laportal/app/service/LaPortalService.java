package uk.syntel.hackathon.laportal.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import uk.syntel.hackathon.laportal.app.beans.Application;
import uk.syntel.hackathon.laportal.app.beans.Customer;
import uk.syntel.hackathon.laportal.app.repository.ApplicationRepository;
import uk.syntel.hackathon.laportal.app.repository.CustomerRepository;

@Service
public class LaPortalService {

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
