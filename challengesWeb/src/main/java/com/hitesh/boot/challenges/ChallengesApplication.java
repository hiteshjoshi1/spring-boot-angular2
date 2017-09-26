package com.hitesh.boot.challenges;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;


/**
 * @author hitjoshi
 *
 */
@SpringBootApplication(scanBasePackages={"com.hitesh.boot.challenges.*"})
@EnableJpaRepositories(basePackages = "com.hitesh.boot.challenges.repositories")
@EnableDiscoveryClient
public class ChallengesApplication extends SpringBootServletInitializer {

    public static void main(String[] args)  {
        System.setProperty("spring.config.name", "challenges-server");
        SpringApplication.run(ChallengesApplication.class, args);
    }
    @Bean
    public HttpMessageConverters customConverters() {
        ByteArrayHttpMessageConverter arrayHttpMessageConverter = new ByteArrayHttpMessageConverter();
        return new HttpMessageConverters(arrayHttpMessageConverter);
    }
    

}
