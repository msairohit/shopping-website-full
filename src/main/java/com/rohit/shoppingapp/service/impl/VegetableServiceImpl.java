package com.rohit.shoppingapp.service.impl;

import com.rohit.shoppingapp.repository.VegetableRepository;
import com.rohit.shoppingapp.entity.Vegetable;
import com.rohit.shoppingapp.service.VegetableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VegetableServiceImpl implements VegetableService {

    @Autowired
    private VegetableRepository vegetableRepository;

    @Override
    public List<Vegetable> getAllVegetables() {
        return vegetableRepository.findAll();
    }

    @Override
    public boolean addVegetable(Vegetable vegetable) {
        vegetableRepository.save(vegetable);
        return true;
    }

    @Override
    public boolean updateVegetable(Vegetable vegetable) {
        Vegetable vegetablePO = vegetableRepository.findByName(vegetable.getName());
        vegetablePO.setVegetableDescription(vegetable.getVegetableDescription());
        vegetablePO.setPrice(vegetable.getPrice());
        vegetableRepository.save(vegetablePO);
        return true;
    }

    @Override
    public boolean updateVegetablePrice(Vegetable vegetable) {
        Vegetable vegetablePO = vegetableRepository.findByName(vegetable.getName());
        vegetablePO.setPrice(vegetable.getPrice());
        vegetableRepository.save(vegetablePO);
        return true;
    }

    @Override
    public boolean updateVegetableDescription(Vegetable vegetable) {
        Vegetable vegetablePO = vegetableRepository.findByName(vegetable.getName());
        vegetablePO.setVegetableDescription(vegetable.getVegetableDescription());
        vegetableRepository.save(vegetablePO);
        return true;
    }

    @Override
    public Vegetable getVegetable(String vegetableName) {
        return vegetableRepository.findByName(vegetableName);
    }

    @Override
    public boolean deleteVegetable(Vegetable vegetable) {
        Vegetable toDelete = vegetableRepository.findByName(vegetable.getName());
        vegetableRepository.delete(toDelete);
        return true;
    }
}
