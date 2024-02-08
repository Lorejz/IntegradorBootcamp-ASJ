package com.example.demo.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.ProvinciasModel;
import com.example.demo.repositories.ProvinciasRepository;

@Service
public class ProvinciasService {
	
	@Autowired
	ProvinciasRepository provinciasRepository;
	
	
	public List<ProvinciasModel> getProvinciasByPaisId(int idPais){
		return provinciasRepository.findProvinciasByPaisId(idPais);
	}
	
	
}
