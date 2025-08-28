package com.elms.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference; 
import jakarta.persistence.*; 
import lombok.Data; 
import java.util.List; 
@Entity 
@Table(name = "courses") 
@Data 
public class Course { 
     @Id 
     @GeneratedValue(strategy = GenerationType.IDENTITY) 
     private Long id; 
     private String title; 
     private String description; 
     private String instructorName; 
     @OneToMany(mappedBy = "course") 
     @JsonManagedReference 
     private List<Lesson> lessons;
     
     @OneToMany(mappedBy = "course")
     @JsonManagedReference
     private List<Assignment> assignments;
     
     @OneToMany(mappedBy = "course") 
     @JsonManagedReference 
     private List<Quiz> quizzes; 
     
	 public Course(Long id, String title, String description, String instructorName, List<Lesson> lessons) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.instructorName = instructorName;
		this.lessons = lessons;
	 }
	
     
} 