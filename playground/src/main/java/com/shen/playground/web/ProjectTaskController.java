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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    // Base URL: localhost:8080/api/board
    // POST request to INSERT 1 projectTask
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

    // Get request to: SELECT all data in an iterable of projectTask
    @GetMapping("/all")
    public Iterable<ProjectTask> getAllProjectTasks() {
        return projectTaskService.findAll();
    }

    // Get request to: return 1 responseEntity by id
    @GetMapping("/{project_task_id}")
    public ResponseEntity<?> getProjectTaskById(@PathVariable Long project_task_id) {
        ProjectTask projectTask = projectTaskService.findById(project_task_id);
        return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
    }

    // Delete request to: delete 1 entity by id
    @DeleteMapping("/{project_task_id}")
    public ResponseEntity<?> deleteProjectTaskById(@PathVariable Long project_task_id) {
        projectTaskService.delete(project_task_id);
        return new ResponseEntity<String>("Project Task (id="+ String.valueOf(project_task_id) + ") deleted.", HttpStatus.OK);
    }
}
