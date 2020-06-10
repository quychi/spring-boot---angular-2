package com.finalproject.truck.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finalproject.truck.model.Booking;
import com.finalproject.truck.model.User;

@Repository
public interface BookingDao extends JpaRepository<Booking, Integer> {
}
