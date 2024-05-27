package com.ninja.service;

import com.ninja.model.Issue;
import com.ninja.model.User;
import com.ninja.request.IssueRequest;

import java.util.List;

public interface IssueService {
    Issue getIssueById(Long issueId)throws Exception;
    List<Issue>getIssueByProjectId(Long projectId)throws Exception;
    Issue createIssue(IssueRequest issue, User user)throws Exception;

    void deleteIssue(Long issueId, Long userId)throws Exception;
    Issue addUserToIssue(Long issueId,Long userId)throws Exception;
    Issue updateStatus(Long issueId,String status)throws Exception;

}
