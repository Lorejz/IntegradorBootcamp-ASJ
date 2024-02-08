package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Rubros")
public class RubrosModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idRubro;
	
    @Column(name = "nombreRubro")
	private String nombreRubro;
    
    private boolean habilitadoRubro;
    

	public RubrosModel(int idRubro, String nombreRubro) {
		
		this.idRubro = idRubro;
		this.nombreRubro = nombreRubro;
		
	}
	
	public RubrosModel() {
		
	}

	public int getIdRubro() {
		return idRubro;
	}

	public void setIdRubro(int idRubro) {
		this.idRubro = idRubro;
	}

	public String getNombreRubro() {
		return nombreRubro;
	}

	public void setNombreRubro(String nombreRubro) {
		this.nombreRubro = nombreRubro;
	}

	public boolean isHabilitadoRubro() {
		return habilitadoRubro;
	}

	public void setHabilitadoRubro(boolean habilitadoRubro) {
		this.habilitadoRubro = habilitadoRubro;
	}
	
}
