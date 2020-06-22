package com.rohit.shoppingapp.repository;

import com.rohit.shoppingapp.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {
    List<Cart> findByCustomerName(String customerName);

    Cart findByName(String productName);
}
