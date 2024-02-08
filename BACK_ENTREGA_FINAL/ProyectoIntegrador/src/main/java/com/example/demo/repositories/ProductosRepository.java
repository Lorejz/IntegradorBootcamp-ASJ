package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.ProductosModel;
import com.example.demo.models.ProveedoresModel;

public interface ProductosRepository extends JpaRepository<ProductosModel, Integer> {
	
    @Query("SELECT p FROM ProductosModel p WHERE p.proveedor = :proveedor")
    List<ProductosModel> findByProveedor(@Param("proveedor") ProveedoresModel proveedor);
	
    ProductosModel findBySkuProducto(String skuProducto);
    
    @Query("SELECT COUNT(p) FROM ProductosModel p WHERE p.isHabilitadoProducto = true")
    long countByIsHabilitadoProductoTrue();
    
	
}
