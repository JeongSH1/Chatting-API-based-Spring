package com.demo.springreact.controller;

import com.demo.springreact.dto.JoinDTO;
import com.demo.springreact.service.MemberService;
import com.demo.springreact.token.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LoginController {

    private final TokenProvider tokenProvider;
    private final MemberService memberService;

    @PostMapping("/login")
    public String login(@RequestBody JoinDTO loginDTO) {
        try {
            memberService.login(loginDTO);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return null;
        }
        //return tokenProvider.createToken(loginDTO.getEmail(), Authority.USER);
        return "A";
    }
}
