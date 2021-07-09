package com.Derbigum.App.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;



@Entity
@Table(name="T_Commercial")

public class Commercial extends User {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private int commercialId;

	public int getCommercialId() {
		return commercialId;
	}

	public void setCommercialId(int commercialId) {
		this.commercialId = commercialId;
	}

	public Commercial() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Commercial(Long id, int cin, String firstName, String lastName, Date dateNaissance, boolean status,
			String email, String phoneNumber, String username, String password, String role) {
		super(id, cin, firstName, lastName, dateNaissance, status, email, phoneNumber, username, password, role);
		// TODO Auto-generated constructor stub
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + commercialId;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Commercial other = (Commercial) obj;
		if (commercialId != other.commercialId)
			return false;
		return true;
	}





}
