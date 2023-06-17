package com.demo.springreact.controller;

import com.demo.springreact.dto.LoginDTO;
import com.demo.springreact.service.MemberService;
import com.demo.springreact.token.Token;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoginController {
    private final MemberService memberService;

    @PostMapping("/login")
    public Token login(@RequestBody LoginDTO loginDTO) {
        return memberService.login(loginDTO);
    }
}
