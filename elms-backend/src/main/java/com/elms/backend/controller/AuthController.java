package com.elms.backend.controller;
 
import org.springframework.web.bind.annotation.*;
import java.util.Map;
 
@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody Map<String, String> loginRequest) {
        String username = loginRequest.get("username");
        String dummyToken = "dummy-jwt-for-" + username;
        return Map.of("token", dummyToken);
    }
}