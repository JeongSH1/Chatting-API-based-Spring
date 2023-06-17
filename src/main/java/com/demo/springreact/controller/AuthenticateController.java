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
public class AuthenticateController {
    private final TokenVerifier tokenVerifier;

    @PostMapping("/authenticate")
    public boolean authenticate(@RequestBody @Nullable Token token) {
        return tokenVerifier.verifyToken(token);
    }
}
