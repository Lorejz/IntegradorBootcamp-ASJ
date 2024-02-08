package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.request.RubroCreateDTO;
import com.example.demo.models.RubrosModel;
import com.example.demo.services.RubrosService;

@RestController
public class RubrosController {
	
	@Autowired
	RubrosService rubrosService;
	
	@GetMapping("/rubros")
	public ResponseEntity<List<RubrosModel>> getRubrosActivos(){
		return ResponseEntity.ok( rubrosService.buscarRubrosActivos() );
	}
	
	@GetMapping("/rubros/todos")
	public ResponseEntity<List<RubrosModel>> getRubrosTodos(){
		return ResponseEntity.ok( rubrosService.buscarTodosRubros() );
	}
	
	@PostMapping("/rubros")
	public ResponseEntity<String> createRubro(@RequestBody RubroCreateDTO rubroDto) {
		return ResponseEntity.ok( rubrosService.crearRubro(rubroDto) );
	}
	
	@DeleteMapping("/rubros/{id}")
	public ResponseEntity<String> elimRubro(@PathVariable int id) {
		return ResponseEntity.ok( rubrosService.eliminarRubro(id) );
	}
	
	@PutMapping("/rubros/{id}")
	public ResponseEntity<String> editRubro (@PathVariable int id, @RequestBody RubroCreateDTO rubro ){
		return ResponseEntity.ok( rubrosService.editarRubro(id,rubro) );	}
	
	@PutMapping("/rubros/alta/{id}")
	public ResponseEntity<String> altaRubro(@PathVariable int id) {
		return ResponseEntity.ok( rubrosService.altaRubro(id) );
	}
	
	
}
