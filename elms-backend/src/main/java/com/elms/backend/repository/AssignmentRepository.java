package com.elms.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.elms.backend.model.Assignment;

public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
    List<Assignment> findByCourseId(Long courseId);
}
