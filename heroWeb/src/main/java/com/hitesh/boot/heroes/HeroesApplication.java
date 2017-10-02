package com.hitesh.boot.heroes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.web.client.RestTemplate;




@SpringBootApplication(scanBasePackages={"com.hitesh.boot.heroes"})
@EnableJpaRepositories(basePackages = "com.hitesh.boot.heroes.data.repository")
@EnableDiscoveryClient
public class HeroesApplication extends SpringBootServletInitializer {

//    @Autowired
//    private DiscoveryClient discoveryClient;

    public static void main(String[] args)  {
        System.setProperty("spring.config.name", "heroes-server");
        SpringApplication.run(HeroesApplication.class, args);
    }
    @Bean
    public HttpMessageConverters customConverters() {
        ByteArrayHttpMessageConverter arrayHttpMessageConverter = new ByteArrayHttpMessageConverter();
        return new HttpMessageConverters(arrayHttpMessageConverter);
    }
    
    // Case insensitive: could also use: http://accounts-service
    public static final String CHALLENGE_SERVICE_URL
                                        = "http://CHALLENGES-SERVICE";
    
//    @RequestMapping("/service-instances/{applicationName}")
//    public List<ServiceInstance> serviceInstancesByApplicationName(
//            @PathVariable String applicationName) {
//        return this.discoveryClient.getInstances(applicationName);
//    }
    @LoadBalanced
    @Bean
    RestTemplate restTemplate() {
        return new RestTemplate();
    }



}
