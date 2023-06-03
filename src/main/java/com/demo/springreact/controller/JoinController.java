package com.demo.springreact.controller;

import com.demo.springreact.dto.JoinDTO;
import com.demo.springreact.response.ResponseMessage;
import com.demo.springreact.response.ResponseStatus;
import com.demo.springreact.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.mapping.Join;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
@Slf4j
public class JoinController {

    private final MemberService memberService;

    @PostMapping("/join")
    public ResponseEntity<ResponseMessage> join(@RequestBody JoinDTO joinDTO) {
        ResponseMessage responseMessage;
        try {
            memberService.join(joinDTO);
            responseMessage = new ResponseMessage(ResponseStatus.JOIN_SUCCESS, null);
            log.info("회원가입 성공: " + joinDTO);
        } catch (IllegalStateException e) {
            responseMessage = new ResponseMessage(ResponseStatus.JOIN_FAIL, null);
            log.error("회원가입 실패: " + joinDTO);
        }
        return ResponseEntity.ok()
                .body(responseMessage);

    }
}
