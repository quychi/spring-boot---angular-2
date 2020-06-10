package com.finalproject.truck.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalproject.truck.dao.BookingDao;
import com.finalproject.truck.dao.CarDao;
import com.finalproject.truck.dao.RouteDao;
import com.finalproject.truck.model.Booking;
import com.finalproject.truck.model.Car;
import com.finalproject.truck.model.Route;

@Service
public class CarRouteService {

	@Autowired
	private CarDao carDao;

	@Autowired
	private RouteDao routeDao;

	@Autowired
	private UserService userService;

	public void addCar_Route(Car c, Route r) {
		// Add tag references in the post
//        c.getRoutes().add(r);

        // Add post reference in the tags
//        r.getCars().add(c);

        carDao.save(c);				//not need car api addCar!!!!!!!!!!!!!
        routeDao.save(r);			//not need route api addRoute!!!!!!!!!!!!!
	}


//	public List<Booking> getAll() {
//		List<Booking> obj = bookingDao.findAll();
//		return obj;
//	}
//
//	public Booking getBookingById(int id) {
//		try {
//			Booking sl = bookingDao.findById(id).get();
//			return sl;
//		} catch (java.util.NoSuchElementException e) {
//			return null;
//		}
//	}

//    public Course updateCourse(int id, Course sl,int id_crt,int id_trainer) {
//            Course c = course.getOne(id);
//	//sl.setId(id);
//	c.setImgUrl(c.getImgUrl());
//            c.setName(c.getName());
//            c.setNumberOfLecture(c.getNumberOfLecture());
//            c.setBriefInfo(c.getBriefInfo());
//            c.setCreatedBy(userService.getUserById(id_crt));
//            c.setTrainer(userService.getUserById(id_trainer));
//            c.setOriginPrice(c.getOriginPrice());
//            c.setSalePrice(c.getSalePrice());
//            c.setRequirement(c.getRequirement());
//            c.setDescription(c.getDescription());
//	sl=course.save(c);
//            return sl;
//
//}

	public void deleteCarRoute(int id) {			//???
//		carDao.deleteAllInBatch(id);
	}
}
