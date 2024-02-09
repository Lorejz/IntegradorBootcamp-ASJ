package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.models.ProvinciasModel;

public interface ProvinciasRepository extends JpaRepository<ProvinciasModel, Integer> {
	
    @Query("SELECT p FROM ProvinciasModel p WHERE p.pais.id = :idPais")
    List<ProvinciasModel> findProvinciasByPaisId(@Param("idPais") int idPais);	
}
