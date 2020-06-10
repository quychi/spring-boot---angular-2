package com.finalproject.truck.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finalproject.truck.model.Customer;

@Repository

public interface CustomerDao extends JpaRepository<Customer, Integer> {

}
