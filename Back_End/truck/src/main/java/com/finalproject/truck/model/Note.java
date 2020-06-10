package com.finalproject.truck.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tblnote")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Note extends Auditable<String> implements Serializable{
	@Id
	@GeneratedValue
	@Column(name = "id")
	private int id;
	
	@Column(name = "note")
	private String note;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}
	
	
}
