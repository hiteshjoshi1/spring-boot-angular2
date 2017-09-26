/**
 * 
 */
package com.hitesh.boot.challenges.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author hitjoshi
 *
 */

@Entity
@Table(name = "CHALLENGES")
public class Challenges implements Serializable {

    /**
     * 
     */
    private static final long serialVersionUID = -2641209952095853668L;

    @Id
    @Column(name = "CHALLENGES_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long challengesId;
    
    @Column(name = "CHALLENGE_NAME")
    private String challengeName;
    
    @Column(name = "CHALLENGE_LEVEL")
    private int challengeLevel;
    
    @Column(name = "MAX_HEROES")
    private int maxNumOfHeroes;

    /**
     * @return the challengesId
     */
    public long getChallengesId() {
        return challengesId;
    }

    /**
     * @param challengesId the challengesId to set
     */
    public void setChallengesId(long challengesId) {
        this.challengesId = challengesId;
    }

    /**
     * @return the challengeName
     */
    public String getChallengeName() {
        return challengeName;
    }

    /**
     * @param challengeName the challengeName to set
     */
    public void setChallengeName(String challengeName) {
        this.challengeName = challengeName;
    }

    /**
     * @return the challengeLevel
     */
    public int getChallengeLevel() {
        return challengeLevel;
    }

    /**
     * @param challengeLevel the challengeLevel to set
     */
    public void setChallengeLevel(int challengeLevel) {
        this.challengeLevel = challengeLevel;
    }

    /**
     * @return the maxNumOfHeroes
     */
    public int getMaxNumOfHeroes() {
        return maxNumOfHeroes;
    }

    /**
     * @param maxNumOfHeroes the maxNumOfHeroes to set
     */
    public void setMaxNumOfHeroes(int maxNumOfHeroes) {
        this.maxNumOfHeroes = maxNumOfHeroes;
    }

    /* (non-Javadoc)
     * @see java.lang.Object#hashCode()
     */
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + challengeLevel;
        result = prime * result + ((challengeName == null) ? 0 : challengeName.hashCode());
        result = prime * result + (int)(challengesId ^ (challengesId >>> 32));
        result = prime * result + maxNumOfHeroes;
        return result;
    }

    /* (non-Javadoc)
     * @see java.lang.Object#equals(java.lang.Object)
     */
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Challenges other = (Challenges)obj;
        if (challengeLevel != other.challengeLevel)
            return false;
        if (challengeName == null) {
            if (other.challengeName != null)
                return false;
        }
        else if (!challengeName.equals(other.challengeName))
            return false;
        if (challengesId != other.challengesId)
            return false;
        if (maxNumOfHeroes != other.maxNumOfHeroes)
            return false;
        return true;
    }

    /* (non-Javadoc)
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("Challenges [challengesId=").append(challengesId).append(", challengeName=")
                .append(challengeName).append(", challengeLevel=").append(challengeLevel)
                .append(", maxNumOfHeroes=").append(maxNumOfHeroes).append("]");
        return builder.toString();
    }
    
    
}



