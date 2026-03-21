package com.example.backend.business.dto.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record RegisterUserRequest(

        @NotBlank(message = "Username is required")
        @Size(min = 5, max = 30, message = "Username must be between 5 and 30 characters")
        String username,

        @NotBlank(message = "Password is required")
        @Size(min = 5, max = 50, message = "Password must be between 5 and 50 characters")
//        @Pattern(
//                regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$",
//                message = "Password must contain at least one uppercase, one lowercase, one digit, and one special character"
//        )
        String password,

        @NotBlank(message = "Email is required")
        @Email(message = "Email must be valid")
        String email
)
{
}
