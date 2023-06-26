package com.demo.springreact.controller;

import com.demo.springreact.service.ChattingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/chat")
@Slf4j
public class ChatController {
    private final ChattingService chattingService;

    @PostMapping("/create")
    public Long create(@RequestBody List<Long> list) {
        return chattingService.createRoom(list);
    }
}
