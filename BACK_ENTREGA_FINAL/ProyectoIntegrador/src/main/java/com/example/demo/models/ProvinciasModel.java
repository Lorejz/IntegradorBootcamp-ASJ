package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Provincias")
public class ProvinciasModel {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private int idProvincia;
	
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_Pais")
	private PaisesModel pais;
	
	@Column()
	private String nombreProvincia;

	public ProvinciasModel(int idProvincia, PaisesModel pais, String nombreProvincia) {
		
		this.idProvincia = idProvincia;
		this.pais = pais;
		this.nombreProvincia = nombreProvincia;
		
	}
	
	public ProvinciasModel() {
		
	}

	public int getIdProvincia() {
		return idProvincia;
	}

	public void setIdProvincia(int idProvincia) {
		this.idProvincia = idProvincia;
	}

	public PaisesModel getPais() {
		return pais;
	}

	public void setPais(PaisesModel pais) {
		this.pais = pais;
	}

	public String getNombreProvincia() {
		return nombreProvincia;
	}

	public void setNombreProvincia(String nombreProvincia) {
		this.nombreProvincia = nombreProvincia;
	}
	
}
