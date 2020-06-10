package com.finalproject.truck.controller;

import java.util.List;
import java.util.NoSuchElementException;

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

import com.finalproject.truck.dao.CarDao;
import com.finalproject.truck.dao.NoteDao;
import com.finalproject.truck.dao.RouteDao;
import com.finalproject.truck.model.Booking;
import com.finalproject.truck.model.Car;
import com.finalproject.truck.model.ErrorObject;
import com.finalproject.truck.model.Note;
import com.finalproject.truck.model.ResponseMessage;
import com.finalproject.truck.model.Route;
import com.finalproject.truck.model.User;
import com.finalproject.truck.service.BookingService;
import com.finalproject.truck.service.UserService;

@RestController
public class BookingController {
		
	@Autowired
	private BookingService bookingService;

	@RequestMapping(value = "/booking")
	public ResponseEntity<ResponseMessage> getBookingById(@RequestParam int id)
	{
		ResponseMessage response = new ResponseMessage();
		Booking b = bookingService.getBookingById(id);
		response.setData(b);
		if(b == null)
		{
			ErrorObject error = new ErrorObject(0, "Booking not found");
			response.setError(error);
			response.setMessage("error");
		}
		else
		{
			response.setMessage("success");
			response.setError(null);
		}
		return new ResponseEntity<ResponseMessage>(response, b == null ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.OK);
	}

	@RequestMapping(value = "/bookings")
	public ResponseEntity<ResponseMessage> getAllBookings()
	{
		ResponseMessage response = new ResponseMessage();
		List<Booking> b = bookingService.getAll();
		response.setData(b);
		if(b == null)
		{
			ErrorObject error = new ErrorObject(0, "No Booking found!");
			response.setError(error);
			response.setMessage("error");
		}
		else
		{
			response.setMessage("success");
			response.setError(null);
		}
		return new ResponseEntity<ResponseMessage>(response, b == null ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.OK);
	}

	@RequestMapping(value = "/booking", method = RequestMethod.POST)
	public ResponseEntity<ResponseMessage> newBooking(@RequestParam int idRoute, @RequestParam int idNote, @RequestParam int idCar, @RequestBody Booking b)
	{
		ResponseMessage response = new ResponseMessage();
		bookingService.addBooking(b, idRoute, idNote, idCar);
		response.setData(b);
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/booking", method = RequestMethod.PUT)
	public ResponseEntity<ResponseMessage> updateUser(@RequestParam int idRoute, @RequestParam int idNote, @RequestParam int idCar, @RequestBody Booking b, HttpServletRequest request)
	{
		ResponseMessage response = new ResponseMessage();
		b = bookingService.updateBooking(b, idRoute, idNote, idCar);
		response.setData(b);
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/booking", method = RequestMethod.DELETE)
	public ResponseEntity<ResponseMessage> deleteBooking (@RequestParam int id)
	{
		bookingService.deleteBooking(id);
		ResponseMessage response = new ResponseMessage();
		response.setData(true);
		response.setMessage("success");
		response.setError(null);
		return new ResponseEntity<ResponseMessage>(response, HttpStatus.OK);
	}
	
	
}
