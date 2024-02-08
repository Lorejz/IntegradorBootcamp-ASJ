package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.models.OrdenModel;

public interface OrdenRepository extends JpaRepository<OrdenModel, Integer> {
	
	
	@Query("SELECT COALESCE((MAX(o.numeroOrden) + 1), 1) FROM OrdenModel o")
	Integer obtenerSiguienteNumeroOrden();
	
	
    @Query("SELECT COUNT(o) FROM OrdenModel o WHERE o.estadoOrden.idEstado = 1")
    long countByEstadoOrdenIdEstadoActivo();
	
}
