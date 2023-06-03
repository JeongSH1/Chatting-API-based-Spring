package com.demo.springreact.controller;

import com.demo.springreact.dto.JoinDTO;
import com.demo.springreact.dto.LoginDTO;
import com.demo.springreact.entity.Authority;
import com.demo.springreact.entity.Member;
import com.demo.springreact.response.ResponseMessage;
import com.demo.springreact.response.ResponseStatus;
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
    public ResponseEntity<ResponseMessage> login(@RequestBody LoginDTO loginDTO) {
        ResponseMessage responseMessage;
        try {
            memberService.login(loginDTO);
            responseMessage = new ResponseMessage(ResponseStatus.LOGIN_SUCCESS,
                    tokenProvider.createToken(loginDTO.getEmail(), Authority.USER));
            log.info("로그인 성공: " + loginDTO);
        } catch (IllegalArgumentException e) {
            responseMessage = new ResponseMessage(ResponseStatus.LOGIN_FAIL, null);
            log.info("로그인 실패: " + loginDTO);
        }
        return ResponseEntity.ok()
                .body(responseMessage);
    }
}
