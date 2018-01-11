package uk.syntel.hackathon.laportal.app;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import uk.syntel.hackathon.laportal.app.beans.Application;
import uk.syntel.hackathon.laportal.app.service.LaPortalService;

@Component
public class LaPortalAppConsumer {
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private LaPortalService service;

	@KafkaListener(topics = "APPLICATION", group = "HE_COMMON")
	public void listen(Application application) {
		logger.info("Application Received via Kafka: " + application);
		service.propogateApplication(application);
	}
	
}
