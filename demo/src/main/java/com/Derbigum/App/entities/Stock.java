package com.Derbigum.App.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;




@Entity
@Table(name="T_STOCK")
public class Stock implements Serializable {

	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "idStock")
	private int idStock;
	

	


	@OneToMany
	private List<StockDetails> stockDetails;
	
	
	


	public List<StockDetails> getStockDetail() {
		return stockDetails;
	}






	public void setStockDetail(List<StockDetails> stockDetails) {
		this.stockDetails = stockDetails;
	}






	public Stock() {
		super();
	}

}
