/**
 * 
 */
package com.hitesh.boot.heroes.webservice;

import java.security.Principal;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hitesh.boot.heroes.facade.IAuthenticationFacade;

/**
 * @author hitjoshi
 *
 */
@RestController
@RequestMapping(value = "/api/auth")
public class AuthController {
    @Autowired
    @Qualifier("authenticationFacade")
    private IAuthenticationFacade authenticationFacade;
 
    @RequestMapping(value = "/roles", method = RequestMethod.GET)
    public Collection currentUserNameSimple() {
        Authentication authentication = authenticationFacade.getAuthentication();
       Collection<? extends GrantedAuthority> c =   authentication.getAuthorities();
//       GrantedAuthority
//       System.out.println(c.toArray(a));
       System.out.println(c.toString());
       return c;
    }
    @RequestMapping(value="/user",method= RequestMethod.GET)
    public Principal user(Principal user) {
      return user;
    }
    
    
    
}
