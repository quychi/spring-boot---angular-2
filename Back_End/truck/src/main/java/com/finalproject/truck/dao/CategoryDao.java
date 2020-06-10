package com.finalproject.truck.dao;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.finalproject.truck.model.Category;

@Repository
public interface CategoryDao extends JpaRepository<Category, Integer>{
}
