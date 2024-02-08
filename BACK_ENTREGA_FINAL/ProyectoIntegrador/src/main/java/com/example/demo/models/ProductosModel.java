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
@Table(name="Productos")
public class ProductosModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idProducto;
	
    @ManyToOne
    @JoinColumn(name = "idCategoria")
	private CategoriasModel categoria;
	
    @ManyToOne
    @JoinColumn(name = "idProveedor")
	private ProveedoresModel proveedor;
	
    @Column(unique=true)
	private String skuProducto;
	
	private String nombreProducto;
	
	private Double precioProducto;
	
	private String imagenProducto;
	
	private String descProducto;
	
	private Boolean isHabilitadoProducto;
	
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
	private Date createdAt;

    @Column(nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
	private Date updatedAt;

    @Column(nullable = true)
    @Temporal(TemporalType.TIMESTAMP)
    private Date deletedAt;

    
    
	public ProductosModel() {
		
	}

	public int getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(int idProducto) {
		this.idProducto = idProducto;
	}

	public CategoriasModel getCategoria() {
		return categoria;
	}

	public void setCategoria(CategoriasModel categoria) {
		this.categoria = categoria;
	}

	public ProveedoresModel getProveedor() {
		return proveedor;
	}

	public void setProveedor(ProveedoresModel proveedor) {
		this.proveedor = proveedor;
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

	public Double getPrecioProducto() {
		return precioProducto;
	}

	public void setPrecioProducto(Double precioProducto) {
		this.precioProducto = precioProducto;
	}

	public String getImagenProducto() {
		return imagenProducto;
	}

	public void setImagenProducto(String imagenProducto) {
		this.imagenProducto = imagenProducto;
	}

	public String getDescProducto() {
		return descProducto;
	}

	public void setDescProducto(String descProducto) {
		this.descProducto = descProducto;
	}

	public Boolean getIsHabilitadoProducto() {
		return isHabilitadoProducto;
	}

	public void setIsHabilitadoProducto(Boolean isHabilitadoProducto) {
		this.isHabilitadoProducto = isHabilitadoProducto;
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

	public Date getDeletedAt() {
		return deletedAt;
	}

	public void setDeletedAt(Date deletedAt) {
		this.deletedAt = deletedAt;
	}
	
}
