package com.finalproject.truck.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.finalproject.truck.dao.UserDao;
import com.finalproject.truck.model.AuthUser;
import com.finalproject.truck.model.Role;
import com.finalproject.truck.model.User;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public AuthUser loadUserByUsername(String username) throws UsernameNotFoundException {
		try
		{
			User user = userDao.findByUsername(username).get(0);
			return new AuthUser(user.getId(), user.getUsername(), user.getPassword(), getAuthority(user));
		}
		catch(IndexOutOfBoundsException e)
		{
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}

	
        

	private Set getAuthority(User user) {
        Set authorities = new HashSet<>();
        Set<Role> roles = user.getRole();
        for (Role role : roles) {
            System.out.println(role.getName());
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName()));
        }     
		return authorities;
	}

}
