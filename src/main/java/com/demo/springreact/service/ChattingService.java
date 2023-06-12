package com.demo.springreact.service;

import com.demo.springreact.dto.MemberDTO;
import com.demo.springreact.entity.ChattingRoom;
import com.demo.springreact.entity.Member;
import com.demo.springreact.repository.ChattingRepository;
import com.demo.springreact.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class ChattingService {

    private final ChattingRepository chattingRepository;
    private final MemberRepository memberRepository;

    public Long createRoom(List<MemberDTO> memberDTOs) {

        List<Member> members = memberDTOs.stream().map(i ->
            memberRepository.findById(i.getId()).orElse(null)
        ).toList();

        ChattingRoom chattingRoom = new ChattingRoom();
        chattingRoom.setMembers(new ArrayList<>(members));
        chattingRoom.setName(members.toString());
        ChattingRoom createdChattingRoom = chattingRepository.save(chattingRoom);
        return createdChattingRoom.getId();
    }
}
