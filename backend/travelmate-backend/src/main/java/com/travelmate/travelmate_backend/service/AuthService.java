package com.travelmate.travelmate_backend.service;

import com.travelmate.travelmate_backend.dto.AuthResponse;
import com.travelmate.travelmate_backend.dto.LoginRequest;
import com.travelmate.travelmate_backend.dto.RegisterRequest;
import com.travelmate.travelmate_backend.entity.User;
import com.travelmate.travelmate_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    // REGISTER
    public User register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role("USER")
                .build();

        return userRepository.save(user);
    }

    // LOGIN
    public AuthResponse login(LoginRequest request) {

        System.out.println("LOGIN API HIT");

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        System.out.println("USER FOUND: " + user.getEmail());

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            System.out.println("PASSWORD MISMATCH");
            throw new RuntimeException("Invalid credentials");
        }

        System.out.println("PASSWORD MATCHED");

        String token = jwtService.generateToken(
                user.getEmail());

        System.out.println("TOKEN GENERATED");

        return new AuthResponse(token);
    }
}