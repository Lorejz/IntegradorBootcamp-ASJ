package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.PaisesModel;
import com.example.demo.repositories.PaisesRepository;

@Service
public class PaisesService {
	
	@Autowired
	PaisesRepository paisesRepository;
	
	public List<PaisesModel> buscarPaises(){
		
		return paisesRepository.findAll();
	}
	

}
