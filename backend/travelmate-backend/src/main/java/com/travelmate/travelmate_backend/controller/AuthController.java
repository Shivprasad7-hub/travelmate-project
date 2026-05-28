package com.travelmate.travelmate_backend.controller;

import com.travelmate.travelmate_backend.dto.AuthResponse;
import com.travelmate.travelmate_backend.dto.LoginRequest;
import com.travelmate.travelmate_backend.dto.RegisterRequest;
import com.travelmate.travelmate_backend.entity.User;
import com.travelmate.travelmate_backend.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {

        System.out.println("REGISTER HIT");

        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {

        System.out.println("LOGIN CONTROLLER HIT");

        return authService.login(request);
    }
}