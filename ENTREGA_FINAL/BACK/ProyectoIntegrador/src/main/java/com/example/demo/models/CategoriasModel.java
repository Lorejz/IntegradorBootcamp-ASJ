

package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Categorias")
public class CategoriasModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idCategoria;
	
	@Column(unique = true)
	private String nombreCategoria;
	
	private boolean habilitadoCategoria;

	public CategoriasModel() {
		
	}

	public int getIdCategoria() {
		return idCategoria;
	}

	public void setIdCategoria(int idCategoria) {
		this.idCategoria = idCategoria;
	}

	public String getNombreCategoria() {
		return nombreCategoria;
	}

	public void setNombreCategoria(String nombreCategoria) {
		this.nombreCategoria = nombreCategoria;
	}

	public boolean isHabilitadoCategoria() {
		return habilitadoCategoria;
	}

	public void setHabilitadoCategoria(boolean habilitadoCategoria) {
		this.habilitadoCategoria = habilitadoCategoria;
	}
	
}
