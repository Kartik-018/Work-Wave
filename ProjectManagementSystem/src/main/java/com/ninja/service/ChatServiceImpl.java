package com.ninja.service;

import com.ninja.model.Chat;
import com.ninja.repository.ChatRepository;
import org.springframework.stereotype.Service;

@Service
public class ChatServiceImpl implements ChatService{

    private ChatRepository chatRepository;
    @Override
    public Chat createChat(Chat chat) throws Exception {
        return chatRepository.save(chat);
    }
}
