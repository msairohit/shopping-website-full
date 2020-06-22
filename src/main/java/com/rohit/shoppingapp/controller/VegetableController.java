package com.rohit.shoppingapp.controller;

import com.rohit.shoppingapp.entity.Vegetable;
import com.rohit.shoppingapp.service.VegetableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vegetables")
public class VegetableController {

    @Autowired
    private VegetableService vegetableService;

    @GetMapping("/getAll")
    public ResponseEntity<List<Vegetable>> getAllVegetables() {
        return ResponseEntity.ok(vegetableService.getAllVegetables());
    }

    @GetMapping("/get/{vegetable}")
    public ResponseEntity<Vegetable> getVegetable(@PathVariable String vegetableName) {
        return ResponseEntity.ok(vegetableService.getVegetable(vegetableName));
    }

    @PostMapping("/create")
    public ResponseEntity<Boolean> addVegetable(@RequestBody Vegetable vegetable) {
        return ResponseEntity.ok(vegetableService.addVegetable(vegetable));
    }

    @PutMapping("/update")
    public ResponseEntity<Boolean> updateVegetable(@RequestBody Vegetable vegetable) {
        return ResponseEntity.ok(vegetableService.updateVegetable(vegetable));
    }

    @PutMapping("updatePrice")
    public ResponseEntity<Boolean> updateVegetablePrice(@RequestBody Vegetable vegetable) {
        return ResponseEntity.ok(vegetableService.updateVegetablePrice(vegetable));
    }

    @PutMapping("updateDescription")
    public ResponseEntity<Boolean> updateVegetableDescription(@RequestBody Vegetable vegetable) {
        return ResponseEntity.ok(vegetableService.updateVegetableDescription(vegetable));
    }

    @PostMapping("delete")
    public ResponseEntity<Boolean> deleteVegetable(@RequestBody Vegetable vegetable) {
        return ResponseEntity.ok(vegetableService.deleteVegetable(vegetable));
    }
}
