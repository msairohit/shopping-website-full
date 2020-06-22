package com.rohit.shoppingapp.repository;

import com.rohit.shoppingapp.entity.Vegetable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VegetableRepository extends JpaRepository<Vegetable, Integer> {
    Vegetable findByName(String name);
}
