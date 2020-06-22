package com.rohit.shoppingapp.service;

import com.rohit.shoppingapp.entity.Vegetable;

import java.util.List;

public interface VegetableService {
    List<Vegetable> getAllVegetables();

    boolean addVegetable(Vegetable vegetable);

    boolean updateVegetable(Vegetable vegetable);

    boolean updateVegetablePrice(Vegetable vegetable);

    boolean updateVegetableDescription(Vegetable vegetable);

    Vegetable getVegetable(String vegetableName);

    boolean deleteVegetable(Vegetable vegetable);
}
