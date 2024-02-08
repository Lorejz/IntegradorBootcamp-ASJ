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

import com.example.demo.models.CategoriasModel;
import com.example.demo.services.CategoriasService;

@RestController
public class CategoriasController {
	
	@Autowired
	CategoriasService categoriasService;
	
	
	@GetMapping("/categorias")
	public ResponseEntity<List<CategoriasModel>> getCategoriasActivas(){
		return ResponseEntity.ok( categoriasService.buscarCategoriasHabilitadas() );
	}
	
	@GetMapping("/categorias/todas")
	public ResponseEntity<List<CategoriasModel>> getCategoriasTodas(){
		return ResponseEntity.ok( categoriasService.buscarCategorias() );
	}
	
	@GetMapping("/categorias/{id}")
	public ResponseEntity<CategoriasModel> getCategoriaById(@PathVariable int id){
		return ResponseEntity.ok( categoriasService.buscarCategoriaPorId(id) );
	}
	
	@PostMapping("/categorias")
	public ResponseEntity<String> postCategoria(@RequestBody CategoriasModel categoria){
		return ResponseEntity.ok( categoriasService.crearCategoria(categoria) );
	}
	
	@DeleteMapping("/categorias/{id}")
	public ResponseEntity<String> deleteCategoria(@PathVariable int id){
		return ResponseEntity.ok( categoriasService.eliminarCategoria(id) );
	}
	
	@PutMapping("/categorias/{id}")
	public ResponseEntity<String> updateCategoria(@PathVariable int id,@RequestBody CategoriasModel categoria){
		return ResponseEntity.ok( categoriasService.modificarCategoria(id,categoria) );
	}
	
	@PutMapping("/categorias/alta/{id}")
	public ResponseEntity<String> altaCategoria(@PathVariable int id){
		return ResponseEntity.ok( categoriasService.altaCategoria(id) );
	}
	
}
