package com.demo.springreact.controller;

import com.demo.springreact.response.ResponseMessage;
import com.demo.springreact.response.ResponseStatus;
import com.demo.springreact.token.Token;
import com.demo.springreact.token.TokenVerifier;
import jakarta.annotation.Nullable;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthenticateController {
    private final TokenVerifier tokenVerifier;

    @PostMapping("/authenticate")
    public ResponseEntity<ResponseMessage> authenticate(@RequestBody @Nullable Token token) {
        ResponseMessage responseMessage;
        if (tokenVerifier.verifyToken(token)) {
            responseMessage = new ResponseMessage(ResponseStatus.AUTHENTICATED, null);
        }
        else {
            responseMessage = new ResponseMessage(ResponseStatus.NOT_AUTHENTICATED, null);
        }
        return ResponseEntity.ok()
                .body(responseMessage);
    }


}
