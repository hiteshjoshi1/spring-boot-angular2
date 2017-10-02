package com.hitesh.boot.challenges.repositories;

import java.util.List;

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
    List<Challenges> findByChallengeLevel(int challengeLevel);
}
