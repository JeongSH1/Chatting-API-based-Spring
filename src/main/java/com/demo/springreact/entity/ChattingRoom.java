package com.demo.springreact.entity;

import com.demo.springreact.dto.RoomDTO;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter @Setter
@NoArgsConstructor
public class ChattingRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chatting_room_id")
    private Long id;

    @Column(name = "room_name")
    private String name;

    @OneToMany(mappedBy = "chattingRoom", cascade = CascadeType.ALL)
    private List<Message> messages = new ArrayList<>();
    private Date recentDate = new Date();
    @ManyToMany
    @JoinTable(name = "chatting_room_member",
            joinColumns = @JoinColumn(name = "chatting_room_id"),
            inverseJoinColumns = @JoinColumn(name = "member_id"))
    private List<Member> members = new ArrayList<>();

    public static RoomDTO toDTO(ChattingRoom chattingRoom) {
        RoomDTO roomDTO = new RoomDTO();
        roomDTO.setId(chattingRoom.getId());
        roomDTO.setName(chattingRoom.getName());
        roomDTO.setRecentdate(chattingRoom.getRecentDate());
        //roomDTO.setLastMessage(chattingRoom.getMessages()[]);
        return roomDTO;
    }

}
