package com.example.demo.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.ProvinciasModel;
import com.example.demo.services.ProvinciasService;

@RestController
public class ProvinciasController {
	
	@Autowired
	ProvinciasService provinciasService;
	
	
	@GetMapping("/provincias/{id}")
	public ResponseEntity<List<ProvinciasModel>> getProvinciasByPaisId(@PathVariable int id){
		return ResponseEntity.ok( provinciasService.getProvinciasByPaisId(id) );
	}
	
	
	
	
}
