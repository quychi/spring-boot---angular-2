/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.finalproject.truck.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.finalproject.truck.model.Slider;

/**
 *
 * @author MyPC
 */
@Repository
public interface SliderRepository extends JpaRepository<Slider,Integer> {
    
}
