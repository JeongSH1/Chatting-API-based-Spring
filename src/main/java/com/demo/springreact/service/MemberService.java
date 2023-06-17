package com.demo.springreact.service;

import com.demo.springreact.dto.JoinDTO;
import com.demo.springreact.dto.LoginDTO;
import com.demo.springreact.entity.Authority;
import com.demo.springreact.entity.Member;
import com.demo.springreact.exception.CustomException;
import com.demo.springreact.repository.MemberRepository;
import com.demo.springreact.error.ErrorCode;
import com.demo.springreact.token.Token;
import com.demo.springreact.token.TokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;
    private final TokenProvider tokenProvider;

    public Long join(JoinDTO joinDTO) {
        log.info("회원가입 시도: " + joinDTO);
        validateDuplicateMember(joinDTO.getEmail());
        Member member = new Member();
        member.setNickname(joinDTO.getNickname());
        member.setEmail(joinDTO.getEmail());
        member.setPassword(joinDTO.getPassword());
        Long id = memberRepository.save(member).getId();
        log.info("회원가입 완료: " + joinDTO);
        return id;
    }

    public Token login(LoginDTO loginDTO) {
        log.info("로그인 시도: " + loginDTO);
        Member findMember = memberRepository.findByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword())
                .orElseThrow(() -> new CustomException(ErrorCode.MEMBER_NOT_FOUND));
        Token token = tokenProvider.createToken(loginDTO.getEmail(), Authority.USER);
        log.info("로그인 완료: " + loginDTO);
        return token;
    }

    private void validateDuplicateMember(String email) {
        Optional<Member> findMember = memberRepository.findByEmail(email);
        if (findMember.isPresent()) throw new CustomException(ErrorCode.MEMBER_ALREADY_EXISTS);
    }

}
