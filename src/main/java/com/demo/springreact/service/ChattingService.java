package com.demo.springreact.service;

import com.demo.springreact.entity.ChattingRoom;
import com.demo.springreact.entity.Member;
import com.demo.springreact.repository.ChattingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;

@Service
@RequiredArgsConstructor
@Transactional
public class ChattingService {

    private final ChattingRepository chattingRepository;

    public Long createRoom(Member...members) {
        ChattingRoom chattingRoom = new ChattingRoom();
        chattingRoom.setMembers(new ArrayList<>(Arrays.asList(members)));
        chattingRoom.setName(Arrays.toString(members));
        ChattingRoom createdChattingRoom = chattingRepository.save(chattingRoom);
        return createdChattingRoom.getId();
    }
}
