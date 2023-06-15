package com.demo.springreact.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    MEMBER_ALREADY_EXISTS(HttpStatus.BAD_REQUEST, "이미 존재하는 회원입니다."), //JOIN
    MEMBER_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 유저 정보를 찾을 수 없습니다"), //LOGIN
    INVALID_TOKEN(HttpStatus.UNAUTHORIZED, "토큰이 유효하지 않습니다."), //AUTHORIZE
    REFRESH_TOKEN_HAS_EXPIRED(HttpStatus.UNAUTHORIZED, "토큰이 만료되었습니다.");

    private final HttpStatus httpStatus;
    private final String message;
}