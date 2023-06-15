package com.demo.springreact.service;

import com.demo.springreact.dto.JoinDTO;
import com.demo.springreact.dto.LoginDTO;
import com.demo.springreact.dto.MemberDTO;
import com.demo.springreact.entity.Authority;
import com.demo.springreact.entity.ChattingRoom;
import com.demo.springreact.entity.Member;
import com.demo.springreact.exception.CustomException;
import com.demo.springreact.repository.MemberRepository;
import com.demo.springreact.response.ErrorCode;
import com.demo.springreact.response.SuccessResponse;
import com.demo.springreact.token.Token;
import com.demo.springreact.token.TokenProvider;
import com.demo.springreact.token.TokenVerifier;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class MemberService {

    private final MemberRepository memberRepository;
    private final TokenVerifier tokenVerifier;
    private final TokenProvider tokenProvider;

    public ResponseEntity<SuccessResponse> join(JoinDTO joinDTO) {
        validateDuplicateMember(joinDTO.getEmail());
        Member member = new Member();
        member.setNickname(joinDTO.getNickname());
        member.setEmail(joinDTO.getEmail());
        member.setPassword(joinDTO.getPassword());
        memberRepository.save(member);
        log.info("회원가입 완료: " + joinDTO);
        return SuccessResponse.toResponseEntity(new SuccessResponse(null));
    }

    public ResponseEntity<SuccessResponse> login(LoginDTO loginDTO) {
       Member findMember = memberRepository.findByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword())
               .orElseThrow(() -> new CustomException(ErrorCode.MEMBER_NOT_FOUND));

       Token token = tokenProvider.createToken(loginDTO.getEmail(), Authority.USER);

       log.info("로그인 완료: " + loginDTO);
       return SuccessResponse.toResponseEntity(new SuccessResponse(token));

    }

    public ResponseEntity<SuccessResponse> loadChattingRoom(Token token) {
        tokenVerifier.verifyToken(token);
        String email = tokenVerifier.parseClaims(token.getAccessToken()).getSubject();
        Member findMember = memberRepository.findByEmail(email)
                .orElseThrow(()-> new CustomException(ErrorCode.MEMBER_NOT_FOUND));
        return SuccessResponse.toResponseEntity(new SuccessResponse(findMember.getChattingRoomList()));
    }

    public List<MemberDTO> loadMembers() {
        List<MemberDTO> memberDTOs = new ArrayList<>();
        memberRepository.findAll().forEach(i -> memberDTOs.add(i.toDTO()));
        return memberDTOs;
    }

    private void validateDuplicateMember(String email) {
        Optional<Member> findMember = memberRepository.findByEmail(email);
        if (findMember.isPresent()) throw new CustomException(ErrorCode.MEMBER_ALREADY_EXISTS);
    }

}
