package com.demo.springreact.controller;

import com.demo.springreact.dto.JoinDTO;
import com.demo.springreact.response.ResponseMessage;
import com.demo.springreact.response.ResponseStatus;
import com.demo.springreact.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
public class JoinController {

    private final MemberService memberService;

    @PostMapping("/join")
    public ResponseEntity<ResponseMessage> join(@RequestBody JoinDTO joinDTO) {
        boolean status = memberService.join(joinDTO);
        ResponseMessage responseMessage = status ?
                new ResponseMessage(ResponseStatus.JOIN_SUCCESS, null) :
                new ResponseMessage(ResponseStatus.JOIN_FAIL, null);

        return ResponseEntity.ok()
                .body(responseMessage);

    }
}
