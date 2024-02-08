package com.example.demo.dto.response;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OrdenListDTO {
	
	private int numeroOrden;
	private String razonSocialProveedor;
	private Date fechaEmisionOrden;
	private Date fechaEntregaOrden;
	private Double montoTotalOrden;
	private String nombreEstado;
	private int idOrden;
	

	public OrdenListDTO() {

	}

	public int getNumeroOrden() {
		return numeroOrden;
	}

	public void setNumeroOrden(int numeroOrden) {
		this.numeroOrden = numeroOrden;
	}

	public String getRazonSocialProveedor() {
		return razonSocialProveedor;
	}

	public void setRazonSocialProveedor(String razonSocialProveedor) {
		this.razonSocialProveedor = razonSocialProveedor;
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

	public Double getMontoTotalOrden() {
		return montoTotalOrden;
	}

	public void setMontoTotalOrden(Double montoTotalOrden) {
		this.montoTotalOrden = montoTotalOrden;
	}

	public String getNombreEstado() {
		return nombreEstado;
	}

	public void setNombreEstado(String nombreEstado) {
		this.nombreEstado = nombreEstado;
	}

	public int getIdOrden() {
		return idOrden;
	}

	public void setIdOrden(int idOrden) {
		this.idOrden = idOrden;
	}


	
}
