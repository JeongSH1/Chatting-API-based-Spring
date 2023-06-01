package com.demo.springreact.service;

import com.demo.springreact.dto.JoinDTO;
import com.demo.springreact.entity.Member;
import com.demo.springreact.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.hibernate.mapping.Join;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {

    private final MemberRepository memberRepository;

    @Transactional
    public boolean join(JoinDTO joinDTO) {
        try {
            validateDuplicateMember(joinDTO.getEmail());
        } catch (IllegalStateException e) {
            e.printStackTrace();
            return false;
        }
        Member member = new Member();
        member.setNickname(joinDTO.getNickname());
        member.setEmail(joinDTO.getEmail());
        member.setPassword(joinDTO.getPassword());
        memberRepository.save(member);
        return true;
    }

    @Transactional
    public Optional<Member> login(JoinDTO loginDTO) {
       Optional<Member> findMember = memberRepository.findByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword());
        System.out.println("findMember = " + findMember);
       if (findMember.isEmpty()) {
           throw new IllegalArgumentException("일치하는 회원이 없습니다.");
       }
       return findMember;
    }

    private void validateDuplicateMember(String email) {

        Optional<Member> findMember = memberRepository.findByEmail(email);
        if (findMember.isPresent()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
    }

}
