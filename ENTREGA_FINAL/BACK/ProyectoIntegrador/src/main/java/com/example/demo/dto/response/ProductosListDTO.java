package com.example.demo.dto.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductosListDTO {
	
	private int idProducto;
	private String imagenProducto;
	private String skuProducto;
	private String nombreProducto;
	private String nombreCategoria;
	private Double precioProducto;
	private String razonSocialProvProducto;
	private boolean isHabilitado;

	public ProductosListDTO() {

	}

	public String getImagenProducto() {
		return imagenProducto;
	}

	public void setImagenProducto(String imagenProducto) {
		this.imagenProducto = imagenProducto;
	}

	public String getSkuProducto() {
		return skuProducto;
	}

	public void setSkuProducto(String skuProducto) {
		this.skuProducto = skuProducto;
	}

	public String getNombreProducto() {
		return nombreProducto;
	}

	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}

	public String getNombreCategoria() {
		return nombreCategoria;
	}

	public void setNombreCategoria(String nombreCategoria) {
		this.nombreCategoria = nombreCategoria;
	}

	public Double getPrecioProducto() {
		return precioProducto;
	}

	public void setPrecioProducto(Double precioProducto) {
		this.precioProducto = precioProducto;
	}

	public String getRazonSocialProvProducto() {
		return razonSocialProvProducto;
	}

	public void setRazonSocialProvProducto(String razonSocialProvProducto) {
		this.razonSocialProvProducto = razonSocialProvProducto;
	}

	public int getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(int idProducto) {
		this.idProducto = idProducto;
	}

	public boolean isHabilitado() {
		return isHabilitado;
	}

	public void setHabilitado(boolean isHabilitado) {
		this.isHabilitado = isHabilitado;
	}
	
}
