package com.ninja.controller;

import com.ninja.model.Comment;
import com.ninja.model.User;
import com.ninja.request.CreateCommentRequest;
import com.ninja.response.MessageResponse;
import com.ninja.service.CommentService;
import com.ninja.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private CommentService commentService;

    private UserService userService;

    @PostMapping()
    public ResponseEntity<Comment>createComment(
            @RequestBody CreateCommentRequest req,
            @RequestHeader("Authorization") String jwt)throws Exception{
        User user=userService.findUserProfileByJwt(jwt);
        Comment createdComment=commentService.createComment(req.getIssueId(), user.getId(), req.getContent());
        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<MessageResponse>deleteComment(
            @PathVariable Long commentId,
            @RequestHeader("Authorization") String jwt)throws Exception{
        User user=userService.findUserProfileByJwt(jwt);
       commentService.deleteComment(commentId, user.getId());
       MessageResponse response=new MessageResponse();
       response.setMessage("Comment deleted successfully");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/{issueId}")
    public ResponseEntity<List<Comment>>getCommentByIssueId(@PathVariable Long issueId)throws Exception{
        List<Comment> comments=commentService.findCommentByIssueId(issueId);
        return new ResponseEntity<>(comments,HttpStatus.OK);
    }
}
