package com.hitesh.boot.heroes.data.entity;

import java.util.HashMap;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"challengesId",
"challengeName",
"challengeLevel",
"maxNumOfHeroes"
})
public class Challenge {


@JsonProperty("challengesId")
private Integer challengesId;
@JsonProperty("challengeName")
private String challengeName;
@JsonProperty("challengeLevel")
private Integer challengeLevel;
@JsonProperty("maxNumOfHeroes")
private Integer maxNumOfHeroes;
@JsonIgnore
private Map<String, Object> additionalProperties = new HashMap<String, Object>();

@JsonProperty("challengesId")
public Integer getChallengesId() {
return challengesId;
}

@JsonProperty("challengesId")
public void setChallengesId(Integer challengesId) {
this.challengesId = challengesId;
}

@JsonProperty("challengeName")
public String getChallengeName() {
return challengeName;
}

@JsonProperty("challengeName")
public void setChallengeName(String challengeName) {
this.challengeName = challengeName;
}

@JsonProperty("challengeLevel")
public Integer getChallengeLevel() {
return challengeLevel;
}

@JsonProperty("challengeLevel")
public void setChallengeLevel(Integer challengeLevel) {
this.challengeLevel = challengeLevel;
}

@JsonProperty("maxNumOfHeroes")
public Integer getMaxNumOfHeroes() {
return maxNumOfHeroes;
}

@JsonProperty("maxNumOfHeroes")
public void setMaxNumOfHeroes(Integer maxNumOfHeroes) {
this.maxNumOfHeroes = maxNumOfHeroes;
}

@JsonAnyGetter
public Map<String, Object> getAdditionalProperties() {
return this.additionalProperties;
}

@JsonAnySetter
public void setAdditionalProperty(String name, Object value) {
this.additionalProperties.put(name, value);
}
/* (non-Javadoc)
 * @see java.lang.Object#hashCode()
 */
@Override
public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + ((additionalProperties == null) ? 0 : additionalProperties.hashCode());
    result = prime * result + ((challengeLevel == null) ? 0 : challengeLevel.hashCode());
    result = prime * result + ((challengeName == null) ? 0 : challengeName.hashCode());
    result = prime * result + ((challengesId == null) ? 0 : challengesId.hashCode());
    result = prime * result + ((maxNumOfHeroes == null) ? 0 : maxNumOfHeroes.hashCode());
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
    Challenge other = (Challenge)obj;
    if (additionalProperties == null) {
        if (other.additionalProperties != null)
            return false;
    }
    else if (!additionalProperties.equals(other.additionalProperties))
        return false;
    if (challengeLevel == null) {
        if (other.challengeLevel != null)
            return false;
    }
    else if (!challengeLevel.equals(other.challengeLevel))
        return false;
    if (challengeName == null) {
        if (other.challengeName != null)
            return false;
    }
    else if (!challengeName.equals(other.challengeName))
        return false;
    if (challengesId == null) {
        if (other.challengesId != null)
            return false;
    }
    else if (!challengesId.equals(other.challengesId))
        return false;
    if (maxNumOfHeroes == null) {
        if (other.maxNumOfHeroes != null)
            return false;
    }
    else if (!maxNumOfHeroes.equals(other.maxNumOfHeroes))
        return false;
    return true;
}

/* (non-Javadoc)
 * @see java.lang.Object#toString()
 */
@Override
public String toString() {
    StringBuilder builder = new StringBuilder();
    builder.append("Challenge [challengesId=").append(challengesId).append(", challengeName=")
            .append(challengeName).append(", challengeLevel=").append(challengeLevel)
            .append(", maxNumOfHeroes=").append(maxNumOfHeroes).append(", additionalProperties=")
            .append(additionalProperties).append("]");
    return builder.toString();
}

}
