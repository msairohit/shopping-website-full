package com.rohit.shoppingapp.service.impl;

import com.rohit.shoppingapp.entity.User;
import com.rohit.shoppingapp.repository.UserRepository;
import com.rohit.shoppingapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    /*@Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserServiceImpl(BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }*/

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Boolean deleteUser(String userName) {
        userRepository.delete(userRepository.findByUserName(userName));
        return true;
    }

    @Override
    public User updateUser(User user) {
        User byUserName = userRepository.findByUserName(user.getUserName());
        byUserName.setEmail(user.getEmail());
        byUserName.setFirstName(user.getFirstName());
        byUserName.setLastName(user.getLastName());
        byUserName.setPhoneNumber(user.getPhoneNumber());
        byUserName.setPassword(user.getPassword());//TODO : save encrypted password.
        return userRepository.save(byUserName);
    }
}
