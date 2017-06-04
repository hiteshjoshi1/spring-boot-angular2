/**
 * 
 */
package com.hitesh.boot.heroes.data.repository;

import org.springframework.data.repository.CrudRepository;

import com.hitesh.boot.heroes.data.entity.Hero;

/**
 * @author hitjoshi
 *
 */
public interface HeroRepository extends CrudRepository<Hero, Long>{
    Hero findById(long id);
}


