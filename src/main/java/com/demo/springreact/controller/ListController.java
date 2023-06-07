package com.demo.springreact.controller;

import com.demo.springreact.token.Token;
import com.demo.springreact.token.TokenProvider;
import com.demo.springreact.token.TokenVerifier;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ListController {
    private final TokenVerifier tokenVerifier;
    @PostMapping("/load")
    public void load(@RequestBody Token token) {
        System.out.println("token = " + token);
        System.out.println("tokenVerifier = " + tokenVerifier.parseClaims(token.getAccessToken()));
        System.out.println(tokenVerifier.verifyToken(token.getAccessToken()));
    }
}
