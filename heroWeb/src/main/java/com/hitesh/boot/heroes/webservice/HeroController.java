/**
 * 
 */
package com.hitesh.boot.heroes.webservice;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hitesh.boot.heroes.data.entity.Hero;
import com.hitesh.boot.heroes.data.repository.HeroRepository;

/**
 * @author hitjoshi
 *
 */
@RestController
public class HeroController {
    @Autowired
    private HeroRepository heroRepository;

    @RequestMapping(value="/heroes", method= RequestMethod.GET)
    public List<Hero> findAll(@RequestParam(required=false) String heroId){
        List<Hero> heroes = new ArrayList<Hero>();
        if(null==heroId){
            Iterable<Hero> results = this.heroRepository.findAll();
            results.forEach(room-> {heroes.add(room);});
        }else{
            long id = Long.parseLong(heroId);
            Hero hero = this.heroRepository.findById(id);
            if(null!=hero) {
                heroes.add(hero);
            }
        }
        return heroes;
    }

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
}
