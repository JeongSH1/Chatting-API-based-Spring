package com.demo.springreact.controller;

import com.demo.springreact.dto.JoinDTO;
import com.demo.springreact.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
@Slf4j
public class JoinController {
    private final MemberService memberService;

    @PostMapping("/join")
    public Long join(@RequestBody JoinDTO joinDTO) {
        return memberService.join(joinDTO);
    }
}
