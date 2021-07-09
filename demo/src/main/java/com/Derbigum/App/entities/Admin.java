package com.Derbigum.App.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="T_ADMIN")

public class Admin extends User implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	private int adminId;


	public int getAdminId() {
		return adminId;
	}


	public void setAdminId(int adminId) {
		this.adminId = adminId;
	}


	public Admin(int adminId) {
		super();
		this.adminId = adminId;
	}


	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Admin(Long id, int cin, String firstName, String lastName, Date dateNaissance, boolean status, String email,
			String phoneNumber, String username, String password, String role) {
		super(id, cin, firstName, lastName, dateNaissance, status, email, phoneNumber, username, password, role);
		// TODO Auto-generated constructor stub
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + adminId;
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
		Admin other = (Admin) obj;
		if (adminId != other.adminId)
			return false;
		return true;
	}
	

}
