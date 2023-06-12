package com.demo.springreact.controller;

import com.demo.springreact.dto.MemberDTO;
import com.demo.springreact.response.ResponseMessage;
import com.demo.springreact.response.ResponseStatus;
import com.demo.springreact.service.ChattingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/chat")
@Slf4j
public class ChatController {
    
    private final ChattingService chattingService;
    @PostMapping("/create")
    public ResponseEntity<ResponseMessage> create(@RequestBody ArrayList<MemberDTO> selected) {
        ResponseMessage responseMessage;
        log.info("채팅방을 만듭니다." + selected.stream().map(Object::toString).toList());
        try {
            chattingService.createRoom(selected);
            responseMessage = new ResponseMessage(ResponseStatus.CREATED, null);
        } catch (Exception e) {
            responseMessage = new ResponseMessage(ResponseStatus.NOT_CREATE, null);
        }
        return ResponseEntity.ok().
                body(responseMessage);
    }
}
