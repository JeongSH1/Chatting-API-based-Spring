package com.demo.springreact.controller;

import com.demo.springreact.token.Token;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ListController {
    @PostMapping("/load")
    public void load(@RequestBody Token token) {

    }
}
