package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.DireccionModel;

public interface DireccionRepository extends JpaRepository<DireccionModel, Integer> {

}
