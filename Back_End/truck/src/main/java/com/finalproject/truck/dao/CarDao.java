package com.finalproject.truck.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.finalproject.truck.model.Car;
import com.finalproject.truck.model.Contact;

@Repository
public interface CarDao extends JpaRepository<Car, Integer> {
//	@Query("SELECT c FROM Car c WHERE c.routes.id = ?1")
//	List<Car> findByRouteId(int routeId);
//	Car has routeId
	List<Car> findByListRoute_Id(int routeId);
}
