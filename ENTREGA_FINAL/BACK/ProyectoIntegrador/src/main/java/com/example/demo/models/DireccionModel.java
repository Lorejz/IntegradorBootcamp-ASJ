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
@Table(name="Direccion")
public class DireccionModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idDireccion;
	
    @ManyToOne( fetch = FetchType.EAGER )
    @JoinColumn(name = "idProvincia") //nombre columna
	private ProvinciasModel provincia;
	
    @Column(length = 50)
	private String calleDireccion;

    @Column()
	private int numDireccion;

    @Column()
	private int codPostalDireccion;
    
    @Column()
    private String localidadDireccion;
    
	public DireccionModel(int idDireccion, ProvinciasModel provincia, String calleDireccion, int numDireccion,
			int codPostalDireccion, String localidadDireccion) {
		
		this.idDireccion = idDireccion;
		this.provincia = provincia;
		this.calleDireccion = calleDireccion;
		this.numDireccion = numDireccion;
		this.codPostalDireccion = codPostalDireccion;
		this.localidadDireccion = localidadDireccion;
		
	}
    
    public DireccionModel() {
		
	}

	public int getIdDireccion() {
		return idDireccion;
	}

	public void setIdDireccion(int idDireccion) {
		this.idDireccion = idDireccion;
	}

	public ProvinciasModel getProvincia() {
		return provincia;
	}

	public void setProvincia(ProvinciasModel provincia) {
		this.provincia = provincia;
	}

	public String getCalleDireccion() {
		return calleDireccion;
	}

	public void setCalleDireccion(String calleDireccion) {
		this.calleDireccion = calleDireccion;
	}

	public int getNumDireccion() {
		return numDireccion;
	}

	public void setNumDireccion(int numDireccion) {
		this.numDireccion = numDireccion;
	}

	public int getCodPostaDireccion() {
		return codPostalDireccion;
	}

	public void setCodPostaDireccion(int codPostaDireccion) {
		this.codPostalDireccion = codPostaDireccion;
	}

	public String getLocalidadDireccion() {
		return localidadDireccion;
	}

	public void setLocalidadDireccion(String localidadDireccion) {
		this.localidadDireccion = localidadDireccion;
	}
    
}
