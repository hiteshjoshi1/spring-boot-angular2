/**
 * 
 */
package com.hitesh.boot.heroes.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.hitesh.boot.heroes.facade.IAuthenticationFacade;

/**
 * @author hitjoshi
 *
 */
@Component
public class AuthenticationFacade implements IAuthenticationFacade {

    /* (non-Javadoc)
     * @see com.hitesh.boot.heroes.facade.IAuthenticationFacade#getAuthentication()
     */
    @Override
    public Authentication getAuthentication() {      
        return SecurityContextHolder.getContext().getAuthentication();
    }

}
