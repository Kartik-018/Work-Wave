package com.ninja.repository;

import com.ninja.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue,Long> {

    public List<Issue>findByProjectId(Long id);
}
