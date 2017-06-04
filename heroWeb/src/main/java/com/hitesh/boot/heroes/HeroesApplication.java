package com.hitesh.boot.heroes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;

@SpringBootApplication(scanBasePackages={"com.hitesh.boot.heroes"})
@EnableJpaRepositories(basePackages = "com.hitesh.boot.heroes.data.repository")
public class HeroesApplication extends SpringBootServletInitializer {

    public static void main(String[] args)  {
        SpringApplication.run(HeroesApplication.class, args);
    }
    @Bean
    public HttpMessageConverters customConverters() {
        ByteArrayHttpMessageConverter arrayHttpMessageConverter = new ByteArrayHttpMessageConverter();
        return new HttpMessageConverters(arrayHttpMessageConverter);
    }

}
