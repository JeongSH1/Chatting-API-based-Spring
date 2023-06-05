package com.demo.springreact.service;

import com.demo.springreact.dto.JoinDTO;
import com.demo.springreact.dto.LoginDTO;
import com.demo.springreact.entity.Member;
import com.demo.springreact.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;

    @Transactional
    public void join(JoinDTO joinDTO) {
        validateDuplicateMember(joinDTO.getEmail());
        Member member = new Member();
        member.setNickname(joinDTO.getNickname());
        member.setEmail(joinDTO.getEmail());
        member.setPassword(joinDTO.getPassword());
        memberRepository.save(member);
    }

    @Transactional
    public void login(LoginDTO loginDTO) {
       Optional<Member> findMember = memberRepository.findByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword());
       if (findMember.isEmpty()) {
           throw new IllegalArgumentException("일치하는 회원이 없습니다.");
       }
    }

//    @Transactional
//    public List<ChattingRoom> loadChattingRoom(Token token) {
//
//    }

    private void validateDuplicateMember(String email) {

        Optional<Member> findMember = memberRepository.findByEmail(email);
        if (findMember.isPresent()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

}
