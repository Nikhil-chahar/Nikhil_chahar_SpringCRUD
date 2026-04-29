import React, { useState, useEffect } from 'react';

const StudentForm = ({ student, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name || '',
        email: student.email || '',
        course: student.course || '',
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.course.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    onSubmit(formData);
    
    // Reset form if creating new student
    if (!student) {
      setFormData({ name: '', email: '', course: '' });
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/95 p-6 text-slate-900 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-600">Student form</p>
          <h2 className="mt-2 text-2xl font-black text-slate-950">
            {student ? 'Edit student' : 'Add a student'}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Keep the roster current with a fast, responsive entry form.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="form-group md:col-span-1">
            <label htmlFor="name" className="form-label">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              className="input-field"
              required
            />
          </div>

          <div className="form-group md:col-span-1">
            <label htmlFor="email" className="form-label">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter student email"
              className="input-field"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="course" className="form-label">
            Course *
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="">Select a course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Arts">Arts</option>
          </select>
        </div>

        <div className="rounded-2xl bg-slate-950/5 p-4 text-sm leading-6 text-slate-600">
          Use this form to create a new record or update an existing student.
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button type="submit" className="btn-success flex-1">
            {student ? 'Update Student' : 'Create Student'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
