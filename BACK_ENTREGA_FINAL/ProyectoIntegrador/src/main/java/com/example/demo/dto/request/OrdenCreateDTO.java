package com.example.demo.dto.request;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OrdenCreateDTO {
	
	private int idProveedor;
	private Date fechaEmisionOrden;
	private Date fechaEntregaOrden;
	private String infoOrden;
	private Double montoTotalOrden;
	private int numeroOrden;
	
    private List<OrdenDetalleCreateDTO> ordenDetalles;


	public OrdenCreateDTO() {
		
	}

	public int getIdProveedor() {
		return idProveedor;
	}

	public void setIdProveedor(int idProveedor) {
		this.idProveedor = idProveedor;
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

	public int getNumeroOrden() {
		return numeroOrden;
	}

	public void setNumeroOrden(int numeroOrden) {
		this.numeroOrden = numeroOrden;
	}

	public List<OrdenDetalleCreateDTO> getOrdenDetalles() {
		return ordenDetalles;
	}

	public void setOrdenDetalles(List<OrdenDetalleCreateDTO> ordenDetalles) {
		this.ordenDetalles = ordenDetalles;
	}
	
}
