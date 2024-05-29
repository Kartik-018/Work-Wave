package com.ninja.controller;

import com.ninja.model.Chat;
import com.ninja.model.Message;
import com.ninja.model.User;
import com.ninja.request.CreateMessageRequest;
import com.ninja.service.MessageService;
import com.ninja.service.ProjectService;
import com.ninja.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @Autowired
    private ProjectService projectService;

    @PostMapping("/send")
    public ResponseEntity<Message>sendMessage(@RequestBody CreateMessageRequest request)throws Exception{
        User user=userService.findUserById(request.getSenderId());
        if(user==null)throw new Exception("User not found with id:"+request.getSenderId());
        Chat chat=projectService.getProjectById(request.getProjectId()).getChat();
        if(chat==null)throw new Exception("Chat not found");

        Message sentMessage=messageService.sendMessage(request.getSenderId(), request.getProjectId(), request.getContent());
        return ResponseEntity.ok(sentMessage);
    }

    @GetMapping("/chat/{projectId}")
    public ResponseEntity<List<Message>>getMessagesByChatId(@PathVariable Long projectId)throws Exception{
        List<Message> messages=messageService.getMessageByProjectId(projectId);
        return ResponseEntity.ok(messages);
    }
}
