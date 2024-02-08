package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.CategoriasModel;
import com.example.demo.repositories.CategoriasRepository;

@Service
public class CategoriasService {

	@Autowired
	CategoriasRepository categoriasRepository;
	
	
	public List<CategoriasModel> buscarCategorias() {
		return categoriasRepository.findAll();
	}
	
	public List<CategoriasModel> buscarCategoriasHabilitadas() {
	    return categoriasRepository.findByHabilitadoCategoria(true);
	}
	
	public CategoriasModel buscarCategoriaPorId(int id ) {
		Optional<CategoriasModel> categoria = categoriasRepository.findById(id);
		return categoria.get();
	}
	
	public String crearCategoria(CategoriasModel categoria) {
		CategoriasModel newCategoria = new CategoriasModel();
		newCategoria.setNombreCategoria(categoria.getNombreCategoria());
		newCategoria.setHabilitadoCategoria(true);
		categoriasRepository.save(newCategoria);
		return "categoria creada correctamente";
	}
	
	public String eliminarCategoria(int id) {
		Optional<CategoriasModel> bajaCategoriaOpt = categoriasRepository.findById(id);
		CategoriasModel cat = bajaCategoriaOpt.get();
		cat.setHabilitadoCategoria(false);
		categoriasRepository.save(cat);
		return "categoria eliminada correctamente";
	}
	
	public String modificarCategoria(int id,CategoriasModel categoria) {
		Optional<CategoriasModel> categoriaOpt = categoriasRepository.findById(id);
		CategoriasModel cat = categoriaOpt.get();
		cat.setNombreCategoria(categoria.getNombreCategoria());
		categoriasRepository.save(cat);
		return "categoria actualizada";
	}
	
	public String altaCategoria(int id) {
		Optional<CategoriasModel> categoriaOpt = categoriasRepository.findById(id);
		CategoriasModel cat = categoriaOpt.get();
		cat.setHabilitadoCategoria(true);
		categoriasRepository.save(cat);
		return "categoria dada de alta";
	}
	
	
	
	
	
}
