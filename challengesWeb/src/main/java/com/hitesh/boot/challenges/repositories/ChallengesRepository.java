package com.hitesh.boot.challenges.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hitesh.boot.challenges.entity.Challenges;


/**
 * @author hitjoshi
 *
 */
@Repository
public interface ChallengesRepository extends CrudRepository<Challenges, Long>{
    Challenges findByChallengesId(long challengesId);
    Challenges findByChallengeLevel(long challengeLevel);
}
