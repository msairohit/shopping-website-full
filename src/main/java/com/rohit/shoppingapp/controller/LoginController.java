package com.rohit.shoppingapp.controller;

import com.rohit.shoppingapp.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private AuthenticationService authenticationService;

    @GetMapping("/{userName}/{password}")
    public ResponseEntity<Boolean> login(@PathVariable String userName, @PathVariable String password) {
        return ResponseEntity.ok(authenticationService.login(userName, password));
    }
}
