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

    public Student createStudent(Student student) {
        studentRepository.createStudent(student);
        return student;
    }

    public List<Student> getAllStudents() {
        return studentRepository.getAllStudents();
    }

    public Optional<Student> getStudentById(Integer id) {
        return studentRepository.getStudentById(id);
    }

    public void updateStudent(Integer id, Student student) {
        studentRepository.updateStudent(id, student);
    }

    public void deleteStudent(Integer id) {
        studentRepository.deleteStudent(id);
    }
}
