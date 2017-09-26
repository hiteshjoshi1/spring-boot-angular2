/**
 * 
 */
package com.hitesh.boot.challenges.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hitesh.boot.challenges.entity.Challenges;
import com.hitesh.boot.challenges.repositories.ChallengesRepository;




/**
 * @author hitjoshi
 *
 */
@RestController
@RequestMapping(value="/api")
public class ChallengesController {
    
  @Autowired  
  private ChallengesRepository challengesRepository;
  

    @RequestMapping(value="/challenges", method= RequestMethod.GET)
    public List<Challenges> getAllChallenges(){
        List<Challenges> challenges = new ArrayList<Challenges>();
        Iterable<Challenges> results = this.challengesRepository.findAll();
        results.forEach(challenge-> {challenges.add(challenge);});
        return challenges;
    }
    
    @RequestMapping(value="/severity", method= RequestMethod.GET)
    public Challenges getChallengeBySeverity(@RequestParam(required=false) int challengeLevel){
        System.out.println("Challenge level "+challengeLevel);
         Challenges challenge = this.challengesRepository.findByChallengeLevel(challengeLevel);
        return challenge;
    }

    
}
