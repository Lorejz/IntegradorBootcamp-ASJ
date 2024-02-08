package com.example.demo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.request.OrdenCreateDTO;
import com.example.demo.dto.response.OrdenListDTO;
import com.example.demo.dto.response.OrdenVistaDetalleDTO;
import com.example.demo.services.OrdenService;


@RestController
public class OrdenController {
	
	@Autowired
	OrdenService ordenService;
	
	
	@GetMapping("/ordenes/codigoProv/{id}")
	public ResponseEntity<Integer> getNumeroOrden(@PathVariable int id) {
		return ResponseEntity.ok( ordenService.obtenerSiguienteNumeroOrden(id) );
	}
	
	@GetMapping("/ordenes/activas")
	public ResponseEntity<List<OrdenListDTO>> getOrdenesActivas() {
		return ResponseEntity.ok( ordenService.buscarListadoOrdenesActivas() );
	}
	
	@GetMapping("/ordenes/canceladas")
	public ResponseEntity<List<OrdenListDTO>> getOrdenesCanceladas() {
		return ResponseEntity.ok( ordenService.buscarListadoOrdenesCanceladas() );
	}
	
	@GetMapping("/ordenes/{id}")
	public ResponseEntity<OrdenVistaDetalleDTO> getOrdenById(@PathVariable int id) {
		return ResponseEntity.ok( ordenService.buscarOrdenPorId(id) );
	}
	
	@PostMapping("/ordenes")
	public ResponseEntity<String> postOrden(@RequestBody OrdenCreateDTO ordenCab) {
		return ResponseEntity.ok( ordenService.crearOrden(ordenCab, ordenCab.getOrdenDetalles()) );
	}
	
	@PutMapping("/ordenes/{id}")
	public ResponseEntity<String> cancelarOrden(@PathVariable int id) {
		return ResponseEntity.ok( ordenService.cancelarOrden(id) );
	}
	
	@GetMapping("ordenes/cant") // cantidad de productos activos
	public ResponseEntity<Long> getCantProvHome(){
		return ResponseEntity.ok( ordenService.buscarCantidadOrdenessActivasHome() );
	}
	
}
