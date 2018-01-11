package uk.syntel.hackathon.laportal.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@ComponentScan(basePackages={"uk.syntel.hackathon.laportal.app"})
public class LaPortalApp 
{
    public static void main( String[] args )
    {
        SpringApplication.run(LaPortalApp.class, args);
    }
    
    @Bean
    public RestTemplate restTemplate() {
    	return new RestTemplate();
    }
}
