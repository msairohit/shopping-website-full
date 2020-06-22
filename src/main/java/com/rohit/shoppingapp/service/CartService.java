package com.rohit.shoppingapp.service;

import com.rohit.shoppingapp.entity.Cart;

import java.util.List;

public interface CartService {
    List<Cart> getAllCartItemsForACustomer(String customerName);

    Cart addToCart(Cart cart);

    Cart updateCart(Cart cart);

    Float checkout(String customerName);

    Boolean deleteItem(String productName);
}
