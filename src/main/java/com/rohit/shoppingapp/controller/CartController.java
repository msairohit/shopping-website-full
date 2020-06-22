package com.rohit.shoppingapp.controller;

import com.rohit.shoppingapp.entity.Cart;
import com.rohit.shoppingapp.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{customerName}")
    public ResponseEntity<List<Cart>> getAllForACustomer(@PathVariable String customerName) {
        return ResponseEntity.ok(cartService.getAllCartItemsForACustomer(customerName));
    }

    @GetMapping("/test")
    public String testMethod() {
        return "workingggg";
    }

    @PostMapping
    public ResponseEntity<Cart> addToCart(@RequestBody Cart cart) {
        return ResponseEntity.ok(cartService.addToCart(cart));
    }

    @PutMapping
    public ResponseEntity<Cart> updateCart(@RequestBody Cart cart) {
        return ResponseEntity.ok(cartService.updateCart(cart));
    }

    @GetMapping("/{customerName}/totalCost")
    public ResponseEntity<Float> updateCart(@PathVariable String customerName) {
        return ResponseEntity.ok(cartService.checkout(customerName));
    }

    @DeleteMapping("/{productName}")
    public ResponseEntity<Boolean> deleteItem(@PathVariable String productName) {
        return ResponseEntity.ok(cartService.deleteItem(productName));
    }
}
