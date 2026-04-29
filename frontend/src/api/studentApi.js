import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/students';

const studentApi = {
  // Fetch all students
  getAllStudents: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching students:', error);
      throw error;
    }
  },

  // Fetch a single student by ID
  getStudentById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching student ${id}:`, error);
      throw error;
    }
  },

  // Create a new student
  createStudent: async (student) => {
    try {
      const response = await axios.post(API_BASE_URL, student);
      return response.data;
    } catch (error) {
      console.error('Error creating student:', error);
      throw error;
    }
  },

  // Update a student
  updateStudent: async (id, student) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, student);
      return response.data;
    } catch (error) {
      console.error(`Error updating student ${id}:`, error);
      throw error;
    }
  },

  // Delete a student
  deleteStudent: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting student ${id}:`, error);
      throw error;
    }
  },
};

export default studentApi;
