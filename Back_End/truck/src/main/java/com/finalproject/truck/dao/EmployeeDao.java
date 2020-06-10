package com.finalproject.truck.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finalproject.truck.model.Employee;

@Repository
public interface EmployeeDao extends JpaRepository<Employee, Integer> {

}
