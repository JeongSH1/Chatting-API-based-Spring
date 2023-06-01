package com.demo.springreact.controller;

import com.demo.springreact.dto.JoinDTO;
import com.demo.springreact.entity.Authority;
import com.demo.springreact.entity.Member;
import com.demo.springreact.service.MemberService;
import com.demo.springreact.token.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Controller
@RestController
@RequiredArgsConstructor
public class LoginController {

    private final JwtTokenProvider jwtTokenProvider;
    private final MemberService memberService;

    @PostMapping("/login")
    public String login(@RequestBody JoinDTO loginDTO) {
        try {
            memberService.login(loginDTO);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            return null;
        }
        return jwtTokenProvider.createToken(loginDTO.getEmail(), Authority.USER);
    }
}
