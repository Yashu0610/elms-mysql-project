package com.elms.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.elms.backend.model.Assignment;
import com.elms.backend.repository.AssignmentRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AssignmentController {

    @Autowired
    private AssignmentRepository assignmentRepository;

    @GetMapping("/courses/{courseId}/assignments")
    public List<Assignment> getAssignmentsForCourse(@PathVariable Long courseId) {
        return assignmentRepository.findByCourseId(courseId);
    }
}
