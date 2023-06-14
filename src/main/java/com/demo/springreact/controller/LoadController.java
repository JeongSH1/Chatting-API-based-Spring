package com.demo.springreact.controller;

import com.demo.springreact.response.ResponseMessage;
import com.demo.springreact.response.ResponseStatus;
import com.demo.springreact.service.ChattingService;
import com.demo.springreact.service.MemberService;
import com.demo.springreact.token.Token;
import com.demo.springreact.token.TokenVerifier;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
public class LoadController {
    private final TokenVerifier tokenVerifier;
    private final MemberService memberService;
    private final ChattingService chattingService;
    @PostMapping("/load/list")
    public ResponseEntity<ResponseMessage> loadChattingRoom(@RequestBody Token token) {
        ResponseMessage responseMessage;
        log.info("채팅목록을 불러옵니다. " + tokenVerifier.parseClaims(token.getAccessToken()).getSubject());
        try {
            responseMessage = new ResponseMessage(ResponseStatus.LOAD_CHATTING_ROOM_SUCCESS,
                    chattingService.loadChattingRoom(tokenVerifier.parseClaims(token.getAccessToken()).getSubject()).toString());
        } catch (Exception e) {
            responseMessage = new ResponseMessage(ResponseStatus.LOAD_CHATTING_ROOM_FAIL, null);
            e.printStackTrace();
        }
        return ResponseEntity.ok()
                .body(responseMessage);
    }

    @PostMapping("/load/members")
    public ResponseEntity<ResponseMessage> loadMembers (@RequestBody Token token) {
        ResponseMessage responseMessage;
        log.info("목록을 불러옵니다. " + tokenVerifier.parseClaims(token.getAccessToken()));
        try {
            responseMessage = new ResponseMessage(ResponseStatus.LOAD_MEMBERS_SUCCESS,
                    memberService.loadMembers());
        } catch (Exception e) {
            responseMessage = new ResponseMessage(ResponseStatus.LOAD_MEMBERS_FAIL,
                    null);
        }
        return ResponseEntity.ok()
                .body(responseMessage);
    }
}
