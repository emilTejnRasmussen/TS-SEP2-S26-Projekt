package com.example.backend.business.service;

import com.example.backend.business.dto.auth.LoginRequest;
import com.example.backend.business.dto.auth.RegisterUserRequest;
import com.example.backend.entity.User;
import com.example.backend.persistence.repository.UserRepository;
import com.example.backend.shared.exception.ResourceNotFoundException;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

@Service public class AuthService
{
  private final UserRepository userRepository;

  public AuthService(UserRepository userRepository)
  {
    this.userRepository = userRepository;
  }

  public User registerUser(RegisterUserRequest request)
  {
    User newUser = new User();
    newUser.setUsername(request.username());
    newUser.setEmail(request.email());
    newUser.setHashedPassword("hashed " + request.password());

    return userRepository.save(newUser);
  }

  public User login(@Valid LoginRequest request)
  {
    String hashedPassword = "hashed " + request.password();
    return userRepository.findByUsernameAndHashedPassword(request.username(), hashedPassword)
                         .orElseThrow(() -> new ResourceNotFoundException("User not found"));

  }
}
