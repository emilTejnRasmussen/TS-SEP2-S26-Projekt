package com.example.backend.business.dto.user;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({"id", "username", "email"})
public record UserResponse(
        long id,
        String username,
        String email
)
{
}
