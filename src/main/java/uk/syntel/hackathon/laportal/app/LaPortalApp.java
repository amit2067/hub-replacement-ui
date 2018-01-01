package uk.syntel.hackathon.laportal.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"uk.syntel.hackathon.laportal.app"})
public class LaPortalApp 
{
    public static void main( String[] args )
    {
        SpringApplication.run(LaPortalApp.class, args);
    }
}
