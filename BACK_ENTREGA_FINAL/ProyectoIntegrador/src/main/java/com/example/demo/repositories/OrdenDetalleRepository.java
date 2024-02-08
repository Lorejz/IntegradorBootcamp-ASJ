package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.OrdenDetalleModel;

public interface OrdenDetalleRepository extends JpaRepository<OrdenDetalleModel, Integer> {
	
    @Query("SELECT od FROM OrdenDetalleModel od WHERE od.orden.idOrden = :idOrden")
    List<OrdenDetalleModel> findAllByOrdenId(@Param("idOrden") int idOrden);
	
	
}
