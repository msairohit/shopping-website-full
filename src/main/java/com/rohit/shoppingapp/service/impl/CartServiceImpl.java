package com.rohit.shoppingapp.service.impl;

import com.rohit.shoppingapp.entity.Cart;
import com.rohit.shoppingapp.repository.CartRepository;
import com.rohit.shoppingapp.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Override
    public List<Cart> getAllCartItemsForACustomer(String customerName) {
        return cartRepository.findByCustomerName(customerName);

    }

    @Override
    public Cart addToCart(Cart cart) {
        cart.updateTotalCost();
        return cartRepository.save(cart);
    }

    @Override
    public Cart updateCart(Cart cart) {
        Cart returnValue;
        List<Cart> byCustomerName = cartRepository.findByCustomerName(cart.getCustomerName());
        Optional<Cart> first = byCustomerName.stream()
                .filter(existingCartItem -> existingCartItem.getName().equals(cart.getName()))
                .findAny();
        if (first.isPresent()) {
            first.get().setQuantity(cart.getQuantity());
            first.get().updateTotalCost();
            returnValue = cartRepository.save(first.get());
        } else {
            returnValue = addToCart(cart);
        }
        return returnValue;
    }

    @Override
    public Float checkout(String customerName) {
        List<Cart> byCustomerName = cartRepository.findByCustomerName(customerName);
        return byCustomerName.stream().map(Cart::getTotalCost).reduce((float) 0, Float::sum);
    }

    @Override
    public Boolean deleteItem(String productName) {
        cartRepository.delete(cartRepository.findByName(productName));
        return true;
    }
}
