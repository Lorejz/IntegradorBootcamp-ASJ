package com.example.demo.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name="Orden")
public class OrdenModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idOrden;
	
    @ManyToOne
    @JoinColumn(name = "idProveedor")
	private ProveedoresModel proveedor;
	
    @ManyToOne
    @JoinColumn(name = "idEstado")
	private EstadosOrdenModel estadoOrden;
	
    @Column(unique=true)
	private int numeroOrden;
	
	private Date fechaEmisionOrden;
	
	private Date fechaEntregaOrden;
	
	private String infoOrden;
	
	private Double montoTotalOrden;
	
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;
	
    @Column(nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;
    
    
	public OrdenModel() {

	}

	public int getIdOrden() {
		return idOrden;
	}

	public void setIdOrden(int idOrden) {
		this.idOrden = idOrden;
	}

	public ProveedoresModel getProveedor() {
		return proveedor;
	}

	public void setProveedor(ProveedoresModel proveedor) {
		this.proveedor = proveedor;
	}

	public EstadosOrdenModel getEstadoOrden() {
		return estadoOrden;
	}

	public void setEstadoOrden(EstadosOrdenModel estadoOrden) {
		this.estadoOrden = estadoOrden;
	}

	public int getNumeroOrden() {
		return numeroOrden;
	}

	public void setNumeroOrden(int numeroOrden) {
		this.numeroOrden = numeroOrden;
	}

	public Date getFechaEmisionOrden() {
		return fechaEmisionOrden;
	}

	public void setFechaEmisionOrden(Date fechaEmisionOrden) {
		this.fechaEmisionOrden = fechaEmisionOrden;
	}

	public Date getFechaEntregaOrden() {
		return fechaEntregaOrden;
	}

	public void setFechaEntregaOrden(Date fechaEntregaOrden) {
		this.fechaEntregaOrden = fechaEntregaOrden;
	}

	public String getInfoOrden() {
		return infoOrden;
	}

	public void setInfoOrden(String infoOrden) {
		this.infoOrden = infoOrden;
	}

	public Double getMontoTotalOrden() {
		return montoTotalOrden;
	}

	public void setMontoTotalOrden(Double montoTotalOrden) {
		this.montoTotalOrden = montoTotalOrden;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
}
