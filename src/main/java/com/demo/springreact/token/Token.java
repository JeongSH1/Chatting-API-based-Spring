package com.demo.springreact.token;
import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Token {

    private  String accessToken;
    private  String refreshToken;

}
