package com.finalproject.truck.service;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalproject.truck.dao.RouteDao;
import com.finalproject.truck.model.Car;
import com.finalproject.truck.model.Route;

@Service
public class RouteService {

    @Autowired
	private RouteDao routeDao;
    @Autowired
    private UserService userService;
	public List<Route> getAll()
        {
            List<Route> obj = routeDao.findAll();
                return obj;
        }
	public Route getRouteById(int id)
	{
		try
		{
			Route sl = routeDao.findById(id).get();
			return sl;
		}
		catch(java.util.NoSuchElementException e)
		{
			return null;
		}
	}

	public Route addRoute(Route r) {
		return r = routeDao.save(r);
	}
	
        public Route updateRoute(Route r) {
                Route c = routeDao.getOne(r.getId());
		//sl.setId(id);
		c.setStartPoint(r.getStartPoint());
                c.setEndPoint(r.getEndPoint());
                c.setStartDate(r.getStartDate());
		r=routeDao.save(c);
                return r;
	
	}

	public void deleteRoute(int id) {
		routeDao.deleteById(id);
	}
}
