package com.demo.springreact.controller;

import com.demo.springreact.dto.LoginDTO;
import com.demo.springreact.service.MemberService;
import com.demo.springreact.token.Token;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoginController {
    private final MemberService memberService;

    @PostMapping("/login")
    public String login(@RequestBody String jsonStr) {
        ObjectMapper objectMapper = new ObjectMapper();
        return jsonStr;

        //return memberService.login(loginDTO);
    }
}
