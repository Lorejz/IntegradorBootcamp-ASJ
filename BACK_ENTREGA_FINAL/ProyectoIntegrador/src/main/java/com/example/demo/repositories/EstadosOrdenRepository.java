package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.EstadosOrdenModel;

public interface EstadosOrdenRepository extends JpaRepository<EstadosOrdenModel, Integer> {

}
