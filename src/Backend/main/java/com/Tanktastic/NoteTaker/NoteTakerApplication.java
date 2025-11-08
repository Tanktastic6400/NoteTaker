package com.Tanktastic.NoteTaker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class NoteTakerApplication {

	public static void main(String[] args) {
		SpringApplication.run(NoteTakerApplication.class, args);
	}

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                WebMvcConfigurer.super.addCorsMappings(registry);{
                    registry.addMapping("/**").allowedOrigins("http://localhost:5173");

                }
            }
        };
    }


}
