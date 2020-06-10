package com.finalproject.truck.model;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tblcar")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Car extends Auditable<String> implements Serializable{
	@Id
	@GeneratedValue
	@Column(name = "id")
	private int id;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id", referencedColumnName = "id")
	private Category category;
	
	@Column(name = "status")
	private String status;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "pricePerKm")
	private String pricePerKm;
	
	@Column(name = "price")
	private float price;
	
	@Column(name = "rate")
	private float rate;
	
	@Column(name = "totalRate")
	private int totalRate;
	
	@Column(name = "imgUrl")
	private String imgUrl;
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
	private List<Route> listRoute;
//	@ManyToMany(fetch = FetchType.LAZY,
//            cascade = {
//                CascadeType.PERSIST,
//                CascadeType.MERGE
//            })
//    @JoinTable(name = "car_route",
//            joinColumns = { @JoinColumn(name = "car_id") },
//            inverseJoinColumns = { @JoinColumn(name = "route_id") })
//    private Set<Route> routes = new HashSet<>();
	
	@ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
	private User driver;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public float getRate() {
		return rate;
	}

	public void setRate(float rate) {
		this.rate = rate;
	}

	public int getTotalRate() {
		return totalRate;
	}

	public void setTotalRate(int totalRate) {
		this.totalRate = totalRate;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

//	public Set<Route> getRoutes() {
//		return routes;
//	}
//
//	public void setRoutes(Set<Route> routes) {
//		this.routes = routes;
//	}

	public String getStatus() {
		return status;
	}

	public List<Route> getListRoute() {
		return listRoute;
	}

	public void setListRoute(List<Route> listRoute) {
		this.listRoute = listRoute;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPricePerKm() {
		return pricePerKm;
	}

	public void setPricePerKm(String pricePerKm) {
		this.pricePerKm = pricePerKm;
	}

	public User getDriver() {
		return driver;
	}

	public void setDriver(User driver) {
		this.driver = driver;
	}	
	
	
}
