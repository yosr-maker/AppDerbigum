package com.Derbigum.App.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;


@Entity
@Table(name="T_BASKET")
public class Basket implements Serializable {

	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "basketId")
	private Long basketId;

	
	@Column(name = "prixTotal")
	private float prixTotal;
	
	@Column(name = "isValid")
	private boolean isValid;
	

	@Column(name = "quantiteTotale")
	private int quantiteTotale;


	public Long getBasketId() {
		return basketId;
	}


	public void setBasketId(Long basketId) {
		this.basketId = basketId;
	}


	public float getPrixTotal() {
		return prixTotal;
	}


	public void setPrixTotal(float prixTotal) {
		this.prixTotal = prixTotal;
	}


	public boolean isValid() {
		return isValid;
	}


	public void setValid(boolean isValid) {
		this.isValid = isValid;
	}


	public int getQuantiteTotale() {
		return quantiteTotale;
	}


	public void setQuantiteTotale(int quantiteTotale) {
		this.quantiteTotale = quantiteTotale;
	}
	public Basket() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Basket(Long basketId, float prixTotal, boolean isValid, int quantiteTotale) {
		super();
		this.basketId = basketId;
		this.prixTotal = prixTotal;
		this.isValid = isValid;
		this.quantiteTotale = quantiteTotale;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((basketId == null) ? 0 : basketId.hashCode());
		result = prime * result + (isValid ? 1231 : 1237);
		result = prime * result + Float.floatToIntBits(prixTotal);
		result = prime * result + quantiteTotale;
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Basket other = (Basket) obj;
		if (basketId == null) {
			if (other.basketId != null)
				return false;
		} else if (!basketId.equals(other.basketId))
			return false;
		if (isValid != other.isValid)
			return false;
		if (Float.floatToIntBits(prixTotal) != Float.floatToIntBits(other.prixTotal))
			return false;
		if (quantiteTotale != other.quantiteTotale)
			return false;
		return true;
	}






}