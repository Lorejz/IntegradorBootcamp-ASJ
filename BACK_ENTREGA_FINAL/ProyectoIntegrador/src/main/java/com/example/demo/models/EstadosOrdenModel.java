package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="EstadosOrden")
public class EstadosOrdenModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idEstado;
	
	private String nombreEstado;
	private boolean habilitadoEstado;
	
	public EstadosOrdenModel() {
		
	}
	
	public int getIdEstado() {
		return idEstado;
	}
	public void setIdEstado(int idEstado) {
		this.idEstado = idEstado;
	}
	public String getNombreEstado() {
		return nombreEstado;
	}
	public void setNombreEstado(String nombreEstado) {
		this.nombreEstado = nombreEstado;
	}
	public boolean isHabilitadoEstado() {
		return habilitadoEstado;
	}
	public void setHabilitadoEstado(boolean habilitadoEstado) {
		this.habilitadoEstado = habilitadoEstado;
	}
	
	
}
