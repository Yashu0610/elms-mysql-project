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
} 