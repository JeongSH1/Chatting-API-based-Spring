package com.demo.springreact.controller;

import com.demo.springreact.dto.MemberDTO;
import com.demo.springreact.dto.RoomDTO;
import com.demo.springreact.entity.ChattingRoom;
import com.demo.springreact.entity.Message;
import com.demo.springreact.service.ChattingService;
import com.demo.springreact.token.Token;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/load")
@Slf4j
public class LoadController {
    private final ChattingService chattingService;

    @PostMapping("/chatList")
    public List<RoomDTO> loadChattingRoom(@RequestBody Token token) {
        return chattingService.loadChattingRoom(token).stream().map(ChattingRoom::toDTO).toList();
    }

    @PostMapping("/members")
    public List<MemberDTO> loadMembers (@RequestBody Token token) {
       return chattingService.loadMembers(token);
    }

    @PostMapping("/contents")
    public List<Message> loadContents(@RequestBody Long id) {
        return chattingService.loadContents(id);
    }
}
