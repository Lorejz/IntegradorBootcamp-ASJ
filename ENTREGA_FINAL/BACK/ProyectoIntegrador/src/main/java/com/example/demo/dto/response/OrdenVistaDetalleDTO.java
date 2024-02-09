package com.example.demo.dto.response;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OrdenVistaDetalleDTO {
	
	private int numeroOrden;
	private Date fechaEmisionOrden;
	private Date fechaEntregaOrden;
	private String razonSocialProveedor;
	private String logoProveedor;
	private Double montoTotalOrden;
	private String nombreEstado;
	private String infoOrden;
	
	private List<DetallesOrdenVistaDTO> ordenDetalles;

	
	public OrdenVistaDetalleDTO() {
		
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

	public String getRazonSocialProveedor() {
		return razonSocialProveedor;
	}

	public void setRazonSocialProveedor(String razonSocialProveedor) {
		this.razonSocialProveedor = razonSocialProveedor;
	}

	public String getLogoProveedor() {
		return logoProveedor;
	}

	public void setLogoProveedor(String logoProveedor) {
		this.logoProveedor = logoProveedor;
	}

	public List<DetallesOrdenVistaDTO> getOrdenDetalles() {
		return ordenDetalles;
	}

	public void setOrdenDetalles(List<DetallesOrdenVistaDTO> ordenDetalles) {
		this.ordenDetalles = ordenDetalles;
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

	public String getInfoOrden() {
		return infoOrden;
	}

	public void setInfoOrden(String infoOrden) {
		this.infoOrden = infoOrden;
	}
	
	
}
