package com.demo.springreact.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@ToString
@Getter
@Setter
public class RoomDTO {

    private Long id;
    private String name;
    private String lastMessage;
    private Date Recentdate;
    private Long notReadCounting;
}
