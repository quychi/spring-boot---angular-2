package com.finalproject.truck.controller;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.finalproject.truck.dao.UserDao;
import com.finalproject.truck.model.ErrorObject;
import com.finalproject.truck.model.ResponseMessage;
import com.finalproject.truck.model.User;
import com.finalproject.truck.service.UserService;

@RestController
public class UserController {
	
//	@Autowired
//	private JwtTokenUtil tokenUtil;
	
	@Autowired
	private UserService userService;
	
//	@Autowired
//	private PasswordForgotService pwService;
	
	@RequestMapping(value = "/user")
	public ResponseEntity<ResponseMessage> getUserById(@RequestParam int id)
	{
		ResponseMessage response = new ResponseMessage();
		User u = userService.getUserById(id);
		response.setData(u);
		if(u == null)
		{
			ErrorObject error = new ErrorObject(0, "User not found");
			response.setError(error);
			response.setMessage("error");
		}
		else
		{
			response.setMessage("success");
			response.setError(null);
		}
		return new ResponseEntity<ResponseMessage>(response, u == null ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.OK);
	}
	
	@RequestMapping(value = "/updateUser", method = RequestMethod.PUT)
	public ResponseEntity<ResponseMessage> updateUser(@RequestBody User user, HttpServletRequest request)
	{
		ResponseMessage response = new ResponseMessage();
		user = userService.updatePasswordUser(user.getId(), user);
		response.setData(user);
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/updateUserWithoutPassword", method = RequestMethod.PUT)
	public ResponseEntity<ResponseMessage> updateUserWithoutPassword(@RequestBody User user, HttpServletRequest request)
	{
		ResponseMessage response = new ResponseMessage();
		user = userService.updateUserWithoutPassword(user.getId(), user);
		response.setData(user);
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/user", method = RequestMethod.DELETE)
	public ResponseEntity<ResponseMessage> deleteUser(@RequestParam int id)
	{
		userService.deleteUser(id);
		ResponseMessage response = new ResponseMessage();
		response.setData(true);
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
	}
	
//	@RequestMapping(value = "/forgotPassword", method = RequestMethod.POST)
//	public ResponseEntity<ResponseMessage> forgotPassword(@RequestParam String email, HttpServletRequest request)
//	{
//		boolean result = pwService.sendPasswordTokenEmail(email, request);
//		ResponseMessage response = new ResponseMessage();
//		response.setData(result);
//		if(result)
//		{
//			response.setMessage("success");
//			response.setError(null);
//			return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
//		}
//		else
//		{
//			response.setMessage("error");
//			response.setError(new ErrorObject(0, "user not found"));
//			return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
//		}
//	}
	
//	@RequestMapping(value = "/confirmResetToken", method = RequestMethod.POST)
//	public ResponseEntity<ResponseMessage> confirmResetToken(@RequestParam String token)
//	{
//		User user = pwService.getUserByToken(token);
//		ResponseMessage response = new ResponseMessage();
//		response.setData(user);
//		if(user != null)
//		{
//			response.setMessage("success");
//			response.setError(null);
//			return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
//		}
//		else
//		{
//			response.setMessage("error");
//			response.setError(new ErrorObject(0, "invalid token"));
//			return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
//		}
//	}
	
//	@RequestMapping(value = "/confirmUserRegistration", method = RequestMethod.POST)
//	public ResponseEntity<ResponseMessage> confirmUserRegistration(@RequestParam String token)
//	{
//		User user = userService.confirmRegistration(token);
//		ResponseMessage response = new ResponseMessage();
//		response.setData(user);
//		if(user != null)
//		{
//			response.setMessage("success");
//			response.setError(null);
//			return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
//		}
//		else
//		{
//			response.setMessage("error");
//			response.setError(new ErrorObject(0, "invalid token"));
//			return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
//		}
//	}
	
	@RequestMapping(value = "/users")
	public ResponseEntity<ResponseMessage> getAllUsers()
	{
		ResponseMessage response = new ResponseMessage();
		List<User> u = userService.getAllUsers();
		response.setData(u);
		if(u == null)
		{
			ErrorObject error = new ErrorObject(0, "No user found!");
			response.setError(error);
			response.setMessage("error");
		}
		else
		{
			response.setMessage("success");
			response.setError(null);
		}
		return new ResponseEntity<ResponseMessage>(response, u == null ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.OK);
	}

	
	
	//register POST 
	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public ResponseEntity<ResponseMessage> newUser(@Valid @RequestBody User u)
	{
		userService.createUser(u);
		ResponseMessage response = new ResponseMessage();
		response.setData(u);
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
	}
	
	
	
}
