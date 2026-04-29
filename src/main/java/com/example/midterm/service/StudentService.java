package com.example.midterm.service;

import com.example.midterm.model.Student;
import com.example.midterm.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    // Create a new student
    public Student createStudent(Student student) {
        studentRepository.createStudent(student);
        return student;
    }

    // Get all students
    public List<Student> getAllStudents() {
        return studentRepository.getAllStudents();
    }

    // Get a student by ID
    public Optional<Student> getStudentById(Integer id) {
        return studentRepository.getStudentById(id);
    }

    // Update a student
    public void updateStudent(Integer id, Student student) {
        studentRepository.updateStudent(id, student);
    }

    // Delete a student
    public void deleteStudent(Integer id) {
        studentRepository.deleteStudent(id);
    }
}
