/**
 * 
 */
package com.hitesh.boot.heroes.webservice;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hitesh.boot.heroes.data.entity.Challenge;
import com.hitesh.boot.heroes.data.entity.Hero;
import com.hitesh.boot.heroes.data.repository.HeroRepository;
import com.hitesh.boot.heroes.service.HeroChallengeService;

/**
 * @author hitjoshi
 *
 */
@CrossOrigin("*")
@RestController
public class HeroController {

    protected Logger logger = Logger.getLogger(HeroController.class
            .getName());
    
    @Autowired
    private HeroRepository heroRepository;

    @Autowired
    protected HeroChallengeService heroChallengeService;


    @CrossOrigin("*")
    @RequestMapping(value="/heroes", method= RequestMethod.GET)
    public List<Hero> findAll(@RequestParam(required=false) String heroId){
        List<Hero> heroes = new ArrayList<Hero>();
        if(null==heroId){
            Iterable<Hero> results = this.heroRepository.findAll();
            results.forEach(hero-> {heroes.add(hero);});
        }else{
            long id = Long.parseLong(heroId);
            Hero hero = this.heroRepository.findById(id);
            if(null!=hero) {
                heroes.add(hero);
            }
        }
        return heroes;
    }
    @CrossOrigin
    @RequestMapping(value="/heroes", method= RequestMethod.PUT,produces = "application/json",consumes = "application/json")
    public Hero updateHero(@RequestBody Hero hero){
        if(hero== null){
            return null;
        }
        else{
            Hero dbHero = this.heroRepository.findById(hero.getId());
            System.out.println(dbHero);
            dbHero.setName(hero.getName());
            return this.heroRepository.save(dbHero);
        }

    }

    @CrossOrigin
    @RequestMapping(value="/heroes", method= RequestMethod.POST,produces = "application/json",consumes = "application/json")
    public Hero addHero(@RequestBody Hero hero){	 		
        if(hero== null){
            return null;
        }
        else{	 			
            Hero dbHero = new Hero();
            dbHero.setName(hero.getName());
            Hero test = this.heroRepository.save(dbHero);
            System.out.println(test);
            return test;
        }
    }

    @CrossOrigin
    @RequestMapping(value="/heroes/{id}", method= RequestMethod.DELETE,produces = "application/json")
    public boolean deleteHero(@PathVariable("id") String heroId){
        if(null!=heroId){
            System.out.println("hero Id "+heroId);
            Long id = Long.valueOf(heroId);
            Hero hero = this.heroRepository.findById(id);
            this.heroRepository.delete(hero);
            return true;

        }else{
            return false;
        }

    }    

    /**
     * This method depends on Another API deployed as another microservice.
     * The other API URL is not hard coded anywhere in the application
     * Instead its a logical name, which this Eureka client uses to get the actual URL from Euerka Server
     * Example  - http://CHALLENGES-SERVICE
     * Even when one of the instance goes down, the API will not go down
     * @param challengeLevel
     * @return
     */
    @CrossOrigin
    @RequestMapping(value="/heroes/{level}", method= RequestMethod.GET,produces = "application/json")
    public Map<Challenge, List<Hero>>  getChallengesByHeroLevel(@PathVariable("level") String challengeLevel){
        List<Challenge> challengeList =  heroChallengeService.findByChallengeLevel(challengeLevel);
        List<Hero> heroList = this.heroRepository.findByChallengeLevel(Integer.parseInt(challengeLevel));
        Map<Challenge, List<Hero>> map = new HashMap<>();
        for(Challenge challenge: challengeList){
            map.put(challenge,heroList);
        }
        return map;
    }

}
