package com.demo.springreact.controller;

import com.demo.springreact.entity.ChattingRoom;
import com.demo.springreact.response.ResponseMessage;
import com.demo.springreact.response.ResponseStatus;
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
    @PostMapping("/load/list")
    public List<ChattingRoom> load(@RequestBody Token token) {
        if (tokenVerifier.verifyToken(token.getAccessToken()))
            return memberService.loadChattingRoom(tokenVerifier.parseClaims(token.getAccessToken()).getSubject());
        else
            return null;
    }

    @PostMapping("/load/members")
    public ResponseEntity<ResponseMessage> loadMembers (@RequestBody Token token) {
        ResponseMessage responseMessage;
        log.info("load합니다.");
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
