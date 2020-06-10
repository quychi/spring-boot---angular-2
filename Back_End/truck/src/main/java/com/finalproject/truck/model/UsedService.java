package com.finalproject.truck.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tblusedservice")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class UsedService {
	@Id
	@GeneratedValue
	@Column(name = "id")
	private int id;
	
	@Column(name = "pricePerUnit")
	private float pricePerUnit;
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
	private Service service;
	
	@Column(name = "quantity")
	private int quantity;
	
	@Column(name = "totalprice")
	private float totalPrice;

	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
	private Booking booking;
}
