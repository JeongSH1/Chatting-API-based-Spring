package com.demo.springreact.entity;

import com.demo.springreact.dto.MemberDTO;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
@ToString
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String nickname;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    @ManyToMany(mappedBy = "members")
    List<ChattingRoom> chattingRoomList = new ArrayList<>();

    public MemberDTO toDTO() {
        return new MemberDTO(this.id, this.nickname);
    }
}
