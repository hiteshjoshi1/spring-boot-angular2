/**
 * 
 */
package com.hitesh.boot.challenges.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hitesh.boot.challenges.entity.Challenges;
import com.hitesh.boot.challenges.repositories.ChallengesRepository;




/**
 * @author hitjoshi
 * change in convention 
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
    
    /**
     * Get All Challenges at a challenge level
     * @param challengeLevel
     * @return
     */
    @RequestMapping(value="/challenges/{challengeLevel}", method= RequestMethod.GET)
    public List<Challenges> getChallengeBySeverity(@PathVariable("challengeLevel") String challengeLevel){
        List<Challenges> challengeList = this.challengesRepository.findByChallengeLevel(Integer.parseInt(challengeLevel));
        return challengeList;
    }

    
}
