package com.przBack.przBack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class PrzBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(PrzBackApplication.class, args);
		System.out.println("hola prz");
	}
}
