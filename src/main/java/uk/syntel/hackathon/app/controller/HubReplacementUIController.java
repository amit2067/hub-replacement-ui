package uk.syntel.hackathon.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import uk.syntel.hackathon.app.beans.Application;
import uk.syntel.hackathon.app.beans.Customer;
import uk.syntel.hackathon.app.service.HubReplacementUIService;

@RestController
public class HubReplacementUIController {

	@Autowired
	HubReplacementUIService service;

	@PostMapping("/createCustomer")
	public Customer createCustomer(@RequestBody Customer customer) {
		Customer createdCustomer = service.createCustomer(customer);
		return createdCustomer;
	}

	@PostMapping("/createApplication")
	public Application createApplication(@RequestBody Application application) {
          Application createdApplication = service.createApplication(application);
          return createdApplication;
	}

}
