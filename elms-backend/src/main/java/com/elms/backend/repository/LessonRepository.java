package com.elms.backend.repository;

import com.elms.backend.model.Lesson; 
import org.springframework.data.jpa.repository.JpaRepository; 
import java.util.List; 
public interface LessonRepository extends JpaRepository<Lesson, Long> { 
List<Lesson> findByCourseId(Long courseId); 
} 
