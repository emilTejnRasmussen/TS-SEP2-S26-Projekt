package com.example.backend.business.service;

import com.example.backend.business.dto.auth.LoginRequest;
import com.example.backend.business.dto.auth.RegisterUserRequest;
import com.example.backend.business.dto.mapper.UserMapper;
import com.example.backend.business.dto.user.UserResponse;
import com.example.backend.entity.User;
import com.example.backend.persistence.repository.UserRepository;
import com.example.backend.shared.exception.ResourceNotFoundException;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

@Service
public class AuthService
{
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public AuthService(UserRepository userRepository, UserMapper userMapper)
    {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public UserResponse registerUser(RegisterUserRequest request)
    {
        User newUser = new User();
        newUser.setUsername(request.username());
        newUser.setEmail(request.email());
        newUser.setHashedPassword("hashed " + request.password());

        User registeredUser = userRepository.save(newUser);

        return userMapper.toResponse(registeredUser);
    }

    public UserResponse login(@Valid LoginRequest request)
    {
        String hashedPassword = "hashed " + request.password();
        User user = userRepository.findByUsernameAndHashedPassword(request.username(), hashedPassword)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        return userMapper.toResponse(user);
    }
}
