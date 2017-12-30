package uk.syntel.hackathon.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"uk.syntel.hackathon.app"})
public class HubReplacementUIApp 
{
    public static void main( String[] args )
    {
        SpringApplication.run(HubReplacementUIApp.class, args);
    }
}
