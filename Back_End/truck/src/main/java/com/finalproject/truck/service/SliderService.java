/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.truck.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalproject.truck.dao.SliderRepository;
import com.finalproject.truck.model.Slider;

/**
 *
 * @author MyPC
 */
@Service
public class SliderService {

	@Autowired
	private SliderRepository slider;

	public List<Slider> getAll() {
		List<Slider> obj = slider.findAll();
		return obj;
	}

	public Slider getSliderById(int id) {
		try {
			Slider sl = slider.findById(id).get();
			return sl;
		} catch (java.util.NoSuchElementException e) {
			return null;
		}
	}

	public Slider updateSlider(int id, Slider sl) {
		sl.setId(id);
		sl.setImgUrl(sl.getImgUrl());
		sl.setText(sl.getText());
		sl.setTitle(sl.getTitle());
		sl.setStatus(sl.getStatus());
		sl = slider.save(sl);
		return sl;
	}

	public void deleteSlider(int id) {
		slider.deleteById(id);
	}

	public void addSlider(Slider sl) {
		slider.save(sl);
	}
}
