/**
 * 
 */
package com.hitesh.boot.heroes.service;


import java.util.Arrays;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hitesh.boot.heroes.data.entity.Challenge;

/**
 * @author hitjoshi
 *
 */
@Service
public class HeroChallengeService {

    @Autowired
    @LoadBalanced
    protected RestTemplate restTemplate;

    protected Logger logger = Logger.getLogger(HeroChallengeService.class
            .getName());

    /**
     * Service that calls external API 
     * Referred by a Logical Name   
     * @param challengeLevel
     * @return
     */    
    public List<Challenge> findByChallengeLevel(String challengeLevel) {
        Challenge [] challenges = null;
        String serviceUrl = "http://CHALLENGES-SERVICE";
        logger.info("findByNumber() invoked: for " + challengeLevel);
        challenges = restTemplate.getForObject(serviceUrl + "/api/challenges/{number}",
                Challenge[].class, challengeLevel);
        if (challenges == null || challenges.length == 0)
            return null;
        else
            return Arrays.asList(challenges);
    }

}
