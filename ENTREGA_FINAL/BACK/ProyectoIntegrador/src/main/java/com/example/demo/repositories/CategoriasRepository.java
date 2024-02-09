package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.CategoriasModel;

public interface CategoriasRepository extends JpaRepository<CategoriasModel, Integer> {

	List<CategoriasModel> findByHabilitadoCategoria(boolean b);

}
