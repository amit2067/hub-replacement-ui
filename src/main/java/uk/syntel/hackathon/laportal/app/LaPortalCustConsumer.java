package uk.syntel.hackathon.laportal.app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import uk.syntel.hackathon.laportal.app.beans.Customer;
import uk.syntel.hackathon.laportal.app.service.LaPortalService;

@Component
public class LaPortalCustConsumer {
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private LaPortalService service;

	@KafkaListener(topics = "CUSTOMER", group = "HE_COMMON")
	public void listen(Customer customer) {
		logger.info("Customer Received via Kafka: " + customer);
		service.propogateCustomer(customer);
	}
	
}
