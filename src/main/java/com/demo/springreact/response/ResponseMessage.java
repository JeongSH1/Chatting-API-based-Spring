package com.demo.springreact.response;

import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Builder
@Getter
public class ResponseMessage {
    private final ResponseStatus responseStatus;
    private final Object data;
}
