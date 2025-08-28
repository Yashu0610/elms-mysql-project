package com.elms.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference; 
import jakarta.persistence.*; 
import java.util.*;

import lombok.Data; 
@Entity 
@Table(name = "lessons") 
@Data 
public class Lesson { 
      @Id 
      @GeneratedValue(strategy = GenerationType.IDENTITY) 
      private Long id; 
      private String title; 
      private String content; 
      @ManyToOne 
      @JoinColumn(name = "course_id") 
      @JsonBackReference // Manages the 'back' part of the relationship 
      private Course course;
     
      
      
	  public Lesson(Long id, String title, String content, Course course) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.course = course;
	  }
	  
      
}