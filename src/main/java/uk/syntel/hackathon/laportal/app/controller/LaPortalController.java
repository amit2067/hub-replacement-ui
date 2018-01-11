package uk.syntel.hackathon.laportal.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import uk.syntel.hackathon.laportal.app.beans.Application;
import uk.syntel.hackathon.laportal.app.beans.Customer;
import uk.syntel.hackathon.laportal.app.service.LaPortalService;

@Api(value="La portal service", description="LA Portal Operations to deal with Customers and Applications")
@RestController
public class LaPortalController {

	@Autowired
	LaPortalService service;

	@ApiOperation(value = "Create a Customer in LA Portal",response = Customer.class)
	@PostMapping("/createCustomer")
	public Customer createCustomer(@RequestBody Customer customer) {
		Customer createdCustomer = service.createCustomer(customer);
		return createdCustomer;
	}

	@ApiOperation(value = "Create an Application in LA Portal",response = Application.class)
	@PostMapping("/createApplication")
	public Application createApplication(@RequestBody Application application) {
          Application createdApplication = service.createApplication(application);
          return createdApplication;
	}

}
