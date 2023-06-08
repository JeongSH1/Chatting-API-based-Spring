package com.demo.springreact.repository;

import com.demo.springreact.entity.ChattingRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChattingRepository extends JpaRepository<ChattingRoom, Long> {
}
