package com.finalproject.truck.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finalproject.truck.model.Route;

@Repository
public interface RouteDao extends JpaRepository<Route, Integer> {
	
}
