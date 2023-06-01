package com.demo.springreact.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
@Getter @Setter
public class LoginDTO {
    private String email;
    private String password;

}
