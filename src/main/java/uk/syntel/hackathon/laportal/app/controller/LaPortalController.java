package uk.syntel.hackathon.laportal.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import uk.syntel.hackathon.laportal.app.beans.Application;
import uk.syntel.hackathon.laportal.app.beans.Customer;
import uk.syntel.hackathon.laportal.app.service.LaPortalService;

@RestController
public class LaPortalController {

	@Autowired
	LaPortalService service;

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
