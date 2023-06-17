package com.demo.springreact.controller;

import com.demo.springreact.dto.CreateDTO;
import com.demo.springreact.service.ChattingService;
import com.demo.springreact.token.Token;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.json.JSONParser;
import org.apache.tomcat.util.json.ParseException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.LinkedHashMap;

@RestController
@RequiredArgsConstructor
@RequestMapping("/chat")
@Slf4j
public class ChatController {
    private final ChattingService chattingService;
    @PostMapping("/create")
    public void create(@RequestBody Token token) {
        System.out.println(token);
    }
}
