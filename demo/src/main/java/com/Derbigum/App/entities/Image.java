package com.Derbigum.App.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "image_table")
public class Image {


	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "type")
	private String type;
	@Lob
	@Column(name = "picByte")
	private byte[] picByte;
	
	
	
	public Long getId() {
		return id;
	}



	public void setId(Long id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getType() {
		return type;
	}



	public void setType(String type) {
		this.type = type;
	}



	public byte[] getPicByte() {
		return picByte;
	}



	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}

	@OneToOne(mappedBy="image")
	private Product product;	

	public Image() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Image(Long id, String name, String type, byte[] picByte) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.picByte = picByte;
	}
	
	
	
	

}