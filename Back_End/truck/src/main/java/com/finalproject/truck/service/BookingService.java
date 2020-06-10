package com.finalproject.truck.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.finalproject.truck.dao.BookingDao;
import com.finalproject.truck.dao.CarDao;
import com.finalproject.truck.dao.NoteDao;
import com.finalproject.truck.dao.RouteDao;
import com.finalproject.truck.model.Booking;
import com.finalproject.truck.model.Car;
import com.finalproject.truck.model.Note;
import com.finalproject.truck.model.Route;

@Service
public class BookingService {

    @Autowired
	private BookingDao bookingDao;
    
    @Autowired
	private RouteDao routeDao;
	@Autowired
	private NoteDao noteDao;
	@Autowired
	private CarDao carDao;
	
    @Autowired
    private UserService userService;
    
	public List<Booking> getAll()
        {
            List<Booking> obj = bookingDao.findAll();
                return obj;
        }
	
	public Booking getBookingById(int id)
	{
		try
		{
			Booking sl = bookingDao.findById(id).get();
			return sl;
		}
		catch(java.util.NoSuchElementException e)
		{
			return null;
		}
	}

	public Booking addBooking(Booking b, int idRoute, int idNote, int idCar) {
		
		Route r = null;
		try
		{
			r = routeDao.findById(idRoute).get();
		}
		catch(NoSuchElementException ex)
		{
			return null;
		}
		b.setRoute(r);
		
		Note n = null;
		try
		{
			n = noteDao.findById(idNote).get();
			System.out.println("alo"+n.getId());
			System.out.println("alo"+idNote);
			System.out.println("alo car"+idCar);

			System.out.println("alo route"+idRoute);

		}
		catch(NoSuchElementException ex)
		{
			return null;
		}
		b.setNote(n);
		
		Car c = null;
		try
		{
			c = carDao.findById(idCar).get();
		}
		catch(NoSuchElementException ex)
		{
			return null;
		}
		b.setCar(c);
		
		return b = bookingDao.save(b);
	}
	
	public Booking updateBooking(Booking b, int idRoute, int idNote, int idCar) {
		
			Booking old = bookingDao.getOne(b.getId());
		
		old.setPickupTime(b.getPickupTime());
		
		Route r = routeDao.findById(idRoute).get();
		
		old.setRoute(r);
		
		Note n = noteDao.findById(idNote).get();
		
		old.setNote(n);
		
		Car c =  carDao.findById(idCar).get();
		
		old.setCar(c);
		
		old =bookingDao.save(old);
        
		return old;
	
	}

	public void deleteBooking(int id) {
		bookingDao.deleteById(id);
	}
}
