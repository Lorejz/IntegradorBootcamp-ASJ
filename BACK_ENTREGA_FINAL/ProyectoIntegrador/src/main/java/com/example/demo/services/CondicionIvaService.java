package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.CondicionIvaModel;
import com.example.demo.repositories.CondicionIvaRepository;

@Service
public class CondicionIvaService {
	
	@Autowired
	CondicionIvaRepository condicionIvaRepository;
	
	public List<CondicionIvaModel> buscarCondicionesIva(){
		
		return condicionIvaRepository.findAll();
	}
	
}
