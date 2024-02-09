package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.CondicionIvaModel;
import com.example.demo.services.CondicionIvaService;

@RestController
public class CondicionIvaController {
	
	@Autowired()
	CondicionIvaService condicionIvaService;
	
	
	@GetMapping("/condicionesIva")
	public ResponseEntity<List<CondicionIvaModel>> getCondicionesIva() {
		return ResponseEntity.ok( condicionIvaService.buscarCondicionesIva() );  
	}
	

}
