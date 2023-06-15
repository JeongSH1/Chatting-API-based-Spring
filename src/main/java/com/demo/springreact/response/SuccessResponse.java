package com.demo.springreact.response;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;

@RequiredArgsConstructor
@Getter

public class SuccessResponse {
    private final Object data;

    public static ResponseEntity<SuccessResponse> toResponseEntity(SuccessResponse successResponse) {
        return ResponseEntity.ok()
                .body(new SuccessResponse(successResponse.getData()));
    }
}
