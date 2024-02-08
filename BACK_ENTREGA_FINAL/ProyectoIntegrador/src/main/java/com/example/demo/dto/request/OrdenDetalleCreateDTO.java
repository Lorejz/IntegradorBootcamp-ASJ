package com.example.demo.dto.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class OrdenDetalleCreateDTO {
	
	private int idProducto;
	private int cantOrdenDetalle;
	private Double precioUniOrdenDetalle;
	
	private Double montoDetalle;
	private String codSKU;
	private String nombreProducto;
	
	public OrdenDetalleCreateDTO() {
		
	}

	public int getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(int idProducto) {
		this.idProducto = idProducto;
	}

	public int getCantOrdenDetalle() {
		return cantOrdenDetalle;
	}

	public void setCantOrdenDetalle(int cantOrdenDetalle) {
		this.cantOrdenDetalle = cantOrdenDetalle;
	}

	public Double getPrecioUniOrdenDetalle() {
		return precioUniOrdenDetalle;
	}

	public void setPrecioUniOrdenDetalle(Double precioUniOrdenDetalle) {
		this.precioUniOrdenDetalle = precioUniOrdenDetalle;
	}

	public Double getMontoDetalle() {
		return montoDetalle;
	}

	public void setMontoDetalle(Double montoDetalle) {
		this.montoDetalle = montoDetalle;
	}

	public String getNombreProducto() {
		return nombreProducto;
	}

	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}

	public String getCodSKU() {
		return codSKU;
	}

	public void setCodSKU(String codSKU) {
		this.codSKU = codSKU;
	}
	
	
}
