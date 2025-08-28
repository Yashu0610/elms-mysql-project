package com.elms.backend.controller;

import com.elms.backend.model.Course; 
import com.elms.backend.model.Lesson; 
import com.elms.backend.repository.CourseRepository; 
import com.elms.backend.repository.LessonRepository; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.*; 
import java.util.List; 
@RestController 
@RequestMapping("/api") 
@CrossOrigin(origins = "http://localhost:3000") 
     public class CourseController { 
     @Autowired 
     private CourseRepository courseRepository; 
     @Autowired 
     private LessonRepository lessonRepository; 
     @GetMapping("/courses") 
     public List<Course> getAllCourses() { 
        return courseRepository.findAll(); 
} 
     @GetMapping("/courses/{courseId}/lessons") 
     public List<Lesson> getLessonsForCourse(@PathVariable Long courseId) { 
          return lessonRepository.findByCourseId(courseId); 
} 
} 