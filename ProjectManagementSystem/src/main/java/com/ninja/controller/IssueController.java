package com.ninja.controller;

import com.ninja.model.Issue;
import com.ninja.model.IssueDTO;
import com.ninja.model.User;
import com.ninja.request.IssueRequest;
import com.ninja.response.AuthResponse;
import com.ninja.response.MessageResponse;
import com.ninja.service.IssueService;
import com.ninja.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/issues")
public class IssueController {

    @Autowired
    private IssueService issueService;

    @Autowired
    private UserService userService;

    @GetMapping("/{issueId}")
    public ResponseEntity<Issue> getIssueById(@PathVariable Long issueId)throws Exception{
        return ResponseEntity.ok(issueService.getIssueById(issueId));
    }

    @GetMapping("/{issueId}")
    public ResponseEntity<List<Issue>> getIssueByProjectId(@PathVariable Long projectId)throws Exception{
        return ResponseEntity.ok(issueService.getIssueByProjectId(projectId));
    }

    @PostMapping
    public ResponseEntity<IssueDTO> createIssue(
            @RequestBody IssueRequest issueRequest,
            @RequestHeader("Authorization")String token
            )throws Exception{
        User tokenUser=userService.findUserProfileByJwt(token);
        User user=userService.findUserById(tokenUser.getId());

            Issue createdIssue=issueService.createIssue(issueRequest,tokenUser);
            IssueDTO issueDTO=new IssueDTO();
            issueDTO.setDescription(createdIssue.getDescription());
            issueDTO.setDueDate(createdIssue.getDueDate());
            issueDTO.setId(createdIssue.getId());
            issueDTO.setPriority(createdIssue.getPriority());
            issueDTO.setProject(createdIssue.getProject());
            issueDTO.setProjectId(createdIssue.getProjectID());
            issueDTO.setAssignee(createdIssue.getAssignee());
            issueDTO.setStatus(createdIssue.getStatus());
            issueDTO.setTitle(createdIssue.getTitle());
            issueDTO.setTags(createdIssue.getTags());

            return ResponseEntity.ok(issueDTO);
        }



    @DeleteMapping("/{issueId}")
    public ResponseEntity<MessageResponse> deleteIssue(
            @PathVariable Long issueId,
            @RequestHeader("Authorization")String token
    )throws Exception{
        User user=userService.findUserProfileByJwt(token);
        issueService.deleteIssue(issueId,user.getId());

        MessageResponse response=new MessageResponse();
        response.setMessage("Issue deleted");

        return ResponseEntity.ok(response);
    }

//    @GetMapping("/search")
//    public ResponseEntity<AuthResponse> searchIssue(
//            @RequestParam(required = false)String title,
//            @RequestParam(required = false)String status,
//            @RequestParam(required = false)String priority,
//            @RequestParam(required = false)Long assigneeId
//    )throws Exception{
//
//    }

    @PutMapping("/{issueId}/assignee/{userId}")
    public ResponseEntity<Issue> addUserToIssue(
            @PathVariable Long issueId,
            @PathVariable Long userId
    )throws Exception{
        Issue issue=issueService.addUserToIssue(issueId,userId);
        return ResponseEntity.ok(issue);
    }

    @PutMapping("/{issueId}/status/{status}")
    public ResponseEntity<Issue> updateIssueStatus(
            @PathVariable String status,
            @PathVariable Long issueId
    )throws Exception{
        Issue issue=issueService.updateStatus(issueId,status);
        return ResponseEntity.ok(issue);
    }
}


