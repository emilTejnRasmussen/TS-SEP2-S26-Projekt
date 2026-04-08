package com.example.backend.controller;

import com.example.backend.business.dto.auth.LoginRequest;
import com.example.backend.business.dto.auth.RegisterUserRequest;
import com.example.backend.entity.User;
import com.example.backend.business.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController
{
    private final AuthService authService;

    public AuthController(AuthService authService)
    {
        this.authService = authService;
    }

    @PostMapping("/register")
    public User registerUser(@Valid @RequestBody RegisterUserRequest request) {
        return authService.registerUser(request);
    }

    @PostMapping("/login")
    public User login(@Valid @RequestBody LoginRequest request)
    {
        return authService.login(request);
    }

}
