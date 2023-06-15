package com.demo.springreact.controller;

import com.demo.springreact.dto.JoinDTO;
import com.demo.springreact.dto.LoginDTO;
import com.demo.springreact.entity.Authority;
import com.demo.springreact.entity.Member;
import com.demo.springreact.response.ResponseMessage;
import com.demo.springreact.response.ResponseStatus;
import com.demo.springreact.response.SuccessResponse;
import com.demo.springreact.service.MemberService;
import com.demo.springreact.token.TokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoginController {

    private final TokenProvider tokenProvider;
    private final MemberService memberService;

    @PostMapping("/login")
    public ResponseEntity<SuccessResponse> login(@RequestBody LoginDTO loginDTO) {
        return memberService.login(loginDTO);
    }
}
