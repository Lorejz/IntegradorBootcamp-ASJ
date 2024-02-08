package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.PaisesService;
import com.example.demo.models.PaisesModel;


@RestController
public class PaisesController {
	
	@Autowired
	PaisesService paisesService;
	
	@GetMapping("/paises")
	public ResponseEntity<List<PaisesModel>> getPaises(){
		return ResponseEntity.ok( paisesService.buscarPaises() );
	}
	
}
