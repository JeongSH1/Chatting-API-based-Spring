package com.demo.springreact.controller;

import com.demo.springreact.response.ResponseMessage;
import com.demo.springreact.response.ResponseStatus;
import com.demo.springreact.response.SuccessResponse;
import com.demo.springreact.service.ChattingService;
import com.demo.springreact.service.MemberService;
import com.demo.springreact.token.Token;
import com.demo.springreact.token.TokenVerifier;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
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
    private final TokenVerifier tokenVerifier;
    private final MemberService memberService;
    private final ChattingService chattingService;

    @PostMapping("/list")
    public ResponseEntity<SuccessResponse> loadChattingRoom(@RequestBody Token token) {
        return memberService.loadChattingRoom(token);
    }

    @PostMapping("/members")
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
