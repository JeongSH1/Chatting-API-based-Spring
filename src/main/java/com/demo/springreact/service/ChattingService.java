package com.demo.springreact.service;

import com.demo.springreact.dto.MemberDTO;
import com.demo.springreact.entity.ChattingRoom;
import com.demo.springreact.entity.Member;
import com.demo.springreact.entity.Message;
import com.demo.springreact.exception.CustomException;
import com.demo.springreact.repository.ChattingRepository;
import com.demo.springreact.repository.MemberRepository;
import com.demo.springreact.error.ErrorCode;
import com.demo.springreact.token.Token;
import com.demo.springreact.token.TokenVerifier;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ChattingService {

    private final ChattingRepository chattingRepository;
    private final MemberRepository memberRepository;
    private final TokenVerifier tokenVerifier;

    public Long createRoom(List<Long> selected) {
        log.info("채팅방을 만듭니다." + selected.stream().map(Object::toString).toList());
        List<Member> members = selected.stream().map(i ->
            memberRepository.findById(i).orElse(null)
        ).toList();
        ChattingRoom chattingRoom = new ChattingRoom();
        chattingRoom.setMembers(members);
        chattingRoom.setName(members.stream().map(Member::getNickname).toList().toString());
        ChattingRoom createdChattingRoom = chattingRepository.save(chattingRoom);
        log.info("생성된 채팅방: " + chattingRoom.getName());
        return createdChattingRoom.getId();
    }

    public List<ChattingRoom> loadChattingRoom(Token token) {
        tokenVerifier.verifyToken(token);
        String email = tokenVerifier.parseClaims(token).getSubject();
        Member findMember = memberRepository.findByEmail(email)
                .orElseThrow(()-> new CustomException(ErrorCode.MEMBER_NOT_FOUND));
        log.info("채팅방을 불러옵니다. " + email);
        return findMember.getChattingRoomList();
    }

    public List<MemberDTO> loadMembers(Token token) {
        tokenVerifier.verifyToken(token);
        List<MemberDTO> memberDTOs = new ArrayList<>();
        log.info("멤버를 불러옵니다." + tokenVerifier.parseClaims(token).getSubject());
        memberRepository.findAll().forEach(i -> memberDTOs.add(i.toDTO()));
        return memberDTOs;
    }

    public List<Message> loadContents(Long id) {
        ChattingRoom room = chattingRepository.findById(id)
                .orElseThrow(()-> new CustomException(ErrorCode.NON_EXIST_ROOM));
        return room.getMessages();
    }
}
