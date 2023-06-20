package com.demo.springreact.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@ToString
@Getter
@Setter
public class RoomDTO {
    private String name;
    private String lastMessage;
    private Date date;
    private Long notReadCounting;
}
