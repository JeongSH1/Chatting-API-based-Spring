package com.demo.springreact.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class ChattingRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chatting_room_id")
    private Long id;

    @ManyToMany
    @JoinTable(name = "chatting_room_member",
            joinColumns = @JoinColumn(name = "chatting_room_id"),
            inverseJoinColumns = @JoinColumn(name = "member_id"))
    private List<Member> members = new ArrayList<>();

    @Column(name = "room_name")
    private String name;

    @OneToMany(mappedBy = "chattingRoom", cascade = CascadeType.ALL)
    private List<Message> messages = new ArrayList<>();

}
