package uk.syntel.hackathon.laportal.app.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import uk.syntel.hackathon.laportal.app.beans.Application;
import uk.syntel.hackathon.laportal.app.beans.Customer;
import uk.syntel.hackathon.laportal.app.repository.ApplicationRepository;
import uk.syntel.hackathon.laportal.app.repository.CustomerRepository;
import uk.syntel.hackathon.laportal.app.util.LaPortalConstants;

@Service
public class LaPortalService {

	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private ApplicationRepository appRepository;

	@Autowired
	private RestTemplate restTemplate;
	
	public Customer createCustomer(Customer customer) {
		Customer createdCustomer = customerRepository.save(customer);
		logger.info("LA Portal : Customer created -" + createdCustomer);
		if (null != createdCustomer && null != createdCustomer.getId()) {
			final String result = restTemplate.postForObject(LaPortalConstants.CUSTOMER_PUBLISH_URL, createdCustomer, String.class);
			logger.info("LA Portal : Customer publish to Kafka status -" + result);
		}
		return createdCustomer;
	}

	public Application createApplication(Application application) {
		Application createdApp = appRepository.save(application);
		logger.info("LA Portal : Application created -" + createdApp);
		if (null != createdApp && null != createdApp.getId()) {
			String result = restTemplate.postForObject(LaPortalConstants.APPLICATION_PUBLISH_URL, createdApp, String.class);
			logger.info("LA Portal : Application publish to Kafka status -" + result);
		}
		return createdApp;
	}

	public void propogateCustomer(Customer customer) {
		if (LaPortalConstants.LA_PORTAL.equalsIgnoreCase(customer.getCreatedBy())) {
			logger.info("LA Portal : Customer created by self - not inserting");
			return;
		}
		Customer propogatedCustomer = customerRepository.save(customer);
		logger.info("LA Portal : Customer propagated via Kafka - " + propogatedCustomer);
	}

	public void propogateApplication(Application application) {
		if (LaPortalConstants.LA_PORTAL.equalsIgnoreCase(application.getCreatedBy())) {
			logger.info("LA Portal : Application created by self - not inserting");
			return;
		}
		Application propagatedApp = appRepository.save(application);
		logger.info("LA Portal : Application propagated via Kafka - " + propagatedApp);
	}

}
