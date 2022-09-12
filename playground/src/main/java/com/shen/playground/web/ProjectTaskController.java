package com.shen.playground.web;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shen.playground.domain.ProjectTask;
import com.shen.playground.service.ProjectTaskService;

@RestController
@RequestMapping("/api/board")
@CrossOrigin
public class ProjectTaskController {
    
    @Autowired
    private ProjectTaskService projectTaskService;

    // POST request to: localhost:8080/api/board
    @PostMapping("")
    public ResponseEntity<?> addProjectTaskToBoard(@Valid @RequestBody ProjectTask projectTask, BindingResult result) {
        // check object validity
        if(result.hasErrors()) {
            Map<String, String> errMap = new HashMap<>();
            for(FieldError err: result.getFieldErrors()) {
                errMap.put(err.getField(), err.getDefaultMessage());
            }

            return new ResponseEntity<Map<String, String>>(errMap, HttpStatus.BAD_REQUEST);
        }

        // if valid, save to DB
        ProjectTask newPT = projectTaskService.saveOrUpdateProjectTask(projectTask);

        return new ResponseEntity<ProjectTask>(newPT, HttpStatus.CREATED);
    }
}
