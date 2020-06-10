package com.finalproject.truck.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.finalproject.truck.config.JwtTokenUtil;
import com.finalproject.truck.model.AuthUser;
import com.finalproject.truck.model.ErrorObject;
import com.finalproject.truck.model.JwtRequest;
import com.finalproject.truck.model.ResponseMessage;
import com.finalproject.truck.model.User;
import com.finalproject.truck.service.JwtUserDetailsService;
import com.finalproject.truck.service.UserService;

@RestController
@CrossOrigin
public class JwtAuthenticationController {
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	@Autowired
	private JwtUserDetailsService userDetailsService;
	@Autowired
	private UserService userService;

//	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
//	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
//		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
//		final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
//		final String token = jwtTokenUtil.generateToken(userDetails);
//		return ResponseEntity.ok(new JwtResponse(token));
//	}

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<ResponseMessage> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final AuthUser userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());
		
		User user = userService.getUserByUsername(authenticationRequest.getUsername());

		final String token = jwtTokenUtil.generateToken(userDetails);

		ResponseMessage response = new ResponseMessage();
		response.setData(new Object[]{user, token});
		
		if(user == null)
		{
			response.setMessage("error");
			response.setError(new ErrorObject(0, "user not found"));
		}
		else
		{
			response.setMessage("success");
			response.setError(null);
		}
		
		return new ResponseEntity<ResponseMessage>(response, user == null ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.OK);
	}
	
	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}