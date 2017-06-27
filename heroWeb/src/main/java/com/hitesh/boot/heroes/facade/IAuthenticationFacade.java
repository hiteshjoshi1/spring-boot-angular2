/**
 * 
 */
package com.hitesh.boot.heroes.facade;

import org.springframework.security.core.Authentication;

/**
 * @author hitjoshi
 *
 */
public interface IAuthenticationFacade {
    Authentication getAuthentication();
}
