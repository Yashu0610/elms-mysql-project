package com.elms.backend.repository;

import com.elms.backend.model.Course; 
import org.springframework.data.jpa.repository.JpaRepository; 
public interface CourseRepository extends JpaRepository<Course, Long> {
	
	
}