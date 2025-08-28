package com.elms.backend.controller;

import com.elms.backend.model.Quiz;
import com.elms.backend.repository.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class QuizController {

    @Autowired
    private QuizRepository quizRepository;

    @GetMapping("/courses/{courseId}/quizzes")
    public List<Quiz> getQuizzesForCourse(@PathVariable Long courseId) {
        return quizRepository.findByCourseId(courseId);
    }
}
