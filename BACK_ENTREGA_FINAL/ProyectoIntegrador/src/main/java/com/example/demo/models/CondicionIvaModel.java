package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="CondicionIva")
public class CondicionIvaModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idCondicionIva;
	
    @Column(length = 70, unique = true)
	private String nombreCondicionIva;
    
    
	public CondicionIvaModel(int idCondicionIva, String nombreCondicionIva) {

		this.idCondicionIva = idCondicionIva;
		this.nombreCondicionIva = nombreCondicionIva;
	
	}
    
    public CondicionIvaModel() {
		
	}

	public int getIdCondicionIva() {
		return idCondicionIva;
	}

	public void setIdCondicionIva(int idCondicionIva) {
		this.idCondicionIva = idCondicionIva;
	}

	public String getNombreCondicionIva() {
		return nombreCondicionIva;
	}

	public void setNombreCondicionIva(String nombreCondicionIva) {
		this.nombreCondicionIva = nombreCondicionIva;
	}
	
    
}
