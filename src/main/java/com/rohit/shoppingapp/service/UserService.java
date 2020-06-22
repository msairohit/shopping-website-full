package com.rohit.shoppingapp.service;

import com.rohit.shoppingapp.entity.User;

import java.util.List;

public interface UserService {
    User save(User user);

    User getUserByUserName(String userName);

    List<User> getAllUsers();

    Boolean deleteUser(String userName);

    User updateUser(User user);
}
