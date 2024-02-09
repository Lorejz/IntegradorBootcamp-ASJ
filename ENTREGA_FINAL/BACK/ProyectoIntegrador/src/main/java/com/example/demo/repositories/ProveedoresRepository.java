package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.models.ProveedoresModel;

public interface ProveedoresRepository extends JpaRepository<ProveedoresModel, Integer>  {
	
	
	ProveedoresModel findByCodigoProveedor(String codigoProveedor);
	
	
    @Query("SELECT COUNT(p) FROM ProveedoresModel p WHERE p.isHabilitadoProveedor = true")
    long countByIsHabilitadoProveedorTrue();
	
}
