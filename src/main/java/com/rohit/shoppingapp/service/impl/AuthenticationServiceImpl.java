package com.rohit.shoppingapp.service.impl;

import com.rohit.shoppingapp.entity.User;
import com.rohit.shoppingapp.repository.UserRepository;
import com.rohit.shoppingapp.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Boolean login(String userName, String password) {
        User byUserName = userRepository.findByUserName(userName);
        return byUserName != null && byUserName.getPassword().equals(password);
    }
}
