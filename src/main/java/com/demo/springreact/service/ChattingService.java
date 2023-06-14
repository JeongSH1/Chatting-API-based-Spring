package com.demo.springreact.service;

import com.demo.springreact.dto.MemberDTO;
import com.demo.springreact.entity.ChattingRoom;
import com.demo.springreact.entity.Member;
import com.demo.springreact.repository.ChattingRepository;
import com.demo.springreact.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ChattingService {

    private final ChattingRepository chattingRepository;
    private final MemberRepository memberRepository;

    public Long createRoom(List<Long> selected) {

        List<Member> members = selected.stream().map(i ->
            memberRepository.findById(i).orElse(null)
        ).toList();
        ChattingRoom chattingRoom = new ChattingRoom();
        chattingRoom.setMembers(new ArrayList<>(members));
        chattingRoom.setName(members.stream().map(Member::getNickname).toList().toString());
        ChattingRoom createdChattingRoom = chattingRepository.save(chattingRoom);
        return createdChattingRoom.getId();
    }

    public List<ChattingRoom> loadChattingRoom(String email) {
        Optional<Member> findMember = memberRepository.findByEmail(email);
        System.out.println(findMember.toString());
        if (findMember.isEmpty()) {
            log.error("멤버를 불러올 수 없습니다.");
            return null;
        }
        System.out.println(findMember.get().getChattingRoomList());
        return findMember.get().getChattingRoomList();
    }
}
