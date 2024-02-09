package com.example.demo.services;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositories.RubrosRepository;
import com.example.demo.dto.request.RubroCreateDTO;
import com.example.demo.models.RubrosModel;

@Service
public class RubrosService {
	
	@Autowired
	RubrosRepository rubrosRepository;
	
	public List<RubrosModel> buscarRubrosActivos(){
		
		List<RubrosModel> rubros = rubrosRepository.findAll();
		List<RubrosModel> rubrosActivos = new ArrayList<>();

		
		for (RubrosModel rubrosModel : rubros) {
			if(rubrosModel.isHabilitadoRubro() == true) {
				rubrosActivos.add(rubrosModel);
			}
		}
		
		return rubrosActivos;
		
	}
	
	public List<RubrosModel> buscarTodosRubros() {
		return rubrosRepository.findAll();
	}
	
	
	public String crearRubro( RubroCreateDTO rubroDto ) {
		RubrosModel newRubro = new RubrosModel();
		newRubro.setNombreRubro(rubroDto.getNombreRubro());
		newRubro.setHabilitadoRubro(true);
		rubrosRepository.save(newRubro);
		return "rubro creado exitosamente";
	}
	
	public String eliminarRubro(int id) {
	    Optional<RubrosModel> rubroOptional = rubrosRepository.findById(id);
	    if (rubroOptional.isPresent()) {
	    	RubrosModel rubro = rubroOptional.get();
	    	rubro.setHabilitadoRubro(false);
	        rubrosRepository.save(rubro);
	        return "Rubro eliminado exitosamente";
	    } else {
	        return "Rubro no encontrado";
	    }
	}
	
	
	public String editarRubro ( int id, RubroCreateDTO rubro ) {
	    Optional<RubrosModel> rubroOptional = rubrosRepository.findById(id);
	    if (rubroOptional.isPresent()) {
	    	RubrosModel rubroExistente = rubroOptional.get();
	    	rubroExistente.setNombreRubro(rubro.getNombreRubro());
	    	rubrosRepository.save(rubroExistente);
	    	return "rubro modificado";
	    }else {
	    	return "no se encontro el rubro";
	    }	    
	}
	
	
	
	public String altaRubro(int id) {
	    Optional<RubrosModel> rubroOptional = rubrosRepository.findById(id);
	    if (rubroOptional.isPresent()) {
	    	RubrosModel rubro = rubroOptional.get();
	    	rubro.setHabilitadoRubro(true);
	        rubrosRepository.save(rubro);
	        return "Rubro dado de alta exitosamente";
	    } else {
	        return "Rubro no encontrado";
	    }
	}
	
	
	
	
	
	
	
	
}
