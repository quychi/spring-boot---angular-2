package com.finalproject.truck.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalproject.truck.dao.CategoryDao;
import com.finalproject.truck.model.Category;


@Service
public class CategoryService {

	@Autowired
	private CategoryDao categoryDao;
	
	public List<Category> getAllCategory() {
		// TODO Auto-generated method stub
		return categoryDao.findAll();
	}

	public Category getCategoryById(int id) {
		// TODO Auto-generated method stub
		return categoryDao.findById(id).get();
	}

	public void updateOrInsertCategory(Category category) {
		categoryDao.save(category);
		
	}

	public void deleteById(int id) {
		categoryDao.deleteById(id);
		
	}

}
