package com.demo.springreact.controller;

import com.demo.springreact.token.Token;
import com.demo.springreact.token.TokenVerifier;
import jakarta.annotation.Nullable;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthController {
    private final TokenVerifier tokenVerifier;

    @PostMapping("/auth")
    public Long authenticate() {
        System.out.println("call");
        return 1L;
    }

    @PostMapping("/refresh")
    public boolean refresh() {
        return true;
    }
}
