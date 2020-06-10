package com.finalproject.truck.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalproject.truck.dao.CarDao;
import com.finalproject.truck.model.Car;

@Service
public class CarService {

    @Autowired
	private CarDao carDao;
    @Autowired
    private UserService userService;
    
	public List<Car> getAll()
        {
            List<Car> obj = carDao.findAll();
                return obj;
        }
	public List<Car> getCarByRouteId(int idRoute)
    {
		try
		{
			List<Car> obj  = carDao.findByListRoute_Id(idRoute);
			return obj;
			
		}
		catch(java.util.NoSuchElementException e)
		{
			return null;
		}
    }
	public Car getCarById(int id)
	{
		try
		{
			Car sl = carDao.findById(id).get();
			return sl;
		}
		catch(java.util.NoSuchElementException e)
		{
			return null;
		}
	}
		public Car addCar(Car r)
        {
            return r = carDao.save(r);
        }
        public Car updateCar(int id, Car sl, int id_dirver) {
        	Car c = carDao.getOne(id);
		//sl.setId(id);
		c.setImgUrl(sl.getImgUrl());
                c.setCategory(sl.getCategory());
                c.setStatus("Active");
                c.setDescription(sl.getDescription());
                c.setPrice(sl.getPrice());
                c.setPricePerKm(sl.getPricePerKm());
                c.setDriver(userService.getUserById(id_dirver));
		sl=carDao.save(c);
                return sl;
	
	}

	public void deleteCar(int id) {
		carDao.deleteById(id);
	}
}
