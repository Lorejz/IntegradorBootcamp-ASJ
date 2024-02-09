package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "OrdenDetalle")
public class OrdenDetalleModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idOrdenDetalle;
	
    @ManyToOne
    @JoinColumn(name = "idProducto")
	private ProductosModel producto;
	
    @ManyToOne
    @JoinColumn(name = "idOrden")
	private OrdenModel orden;
	
	private int cantOrdenDetalle;
	
	private Double precioUniOrdenDetalle;

	
	public OrdenDetalleModel() {

	}

	public int getIdOrdenDetalle() {
		return idOrdenDetalle;
	}

	public void setIdOrdenDetalle(int idOrdenDetalle) {
		this.idOrdenDetalle = idOrdenDetalle;
	}

	public ProductosModel getProducto() {
		return producto;
	}

	public void setProducto(ProductosModel producto) {
		this.producto = producto;
	}

	public OrdenModel getOrden() {
		return orden;
	}

	public void setOrden(OrdenModel orden) {
		this.orden = orden;
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
	
}
