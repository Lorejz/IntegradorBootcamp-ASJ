package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.PaisesModel;

public interface PaisesRepository extends JpaRepository<PaisesModel, Integer> {

}
