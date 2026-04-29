import React, { useState, useEffect } from 'react';
import studentApi from '../api/studentApi';
import StudentCard from './StudentCard';
import StudentForm from './StudentForm';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch all students
  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await studentApi.getAllStudents();
      setStudents(data);
    } catch (err) {
      setError('Failed to fetch students. Please make sure the backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle adding a new student
  const handleAddStudent = async (student) => {
    try {
      await studentApi.createStudent(student);
      fetchStudents();
      setShowForm(false);
      alert('Student created successfully!');
    } catch (err) {
      alert('Failed to create student');
      console.error(err);
    }
  };

  // Handle updating a student
  const handleUpdateStudent = async (student) => {
    try {
      await studentApi.updateStudent(editingStudent.id, student);
      fetchStudents();
      setEditingStudent(null);
      setShowForm(false);
      alert('Student updated successfully!');
    } catch (err) {
      alert('Failed to update student');
      console.error(err);
    }
  };

  // Handle deleting a student
  const handleDeleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await studentApi.deleteStudent(id);
        fetchStudents();
        alert('Student deleted successfully!');
      } catch (err) {
        alert('Failed to delete student');
        console.error(err);
      }
    }
  };

  // Open form for editing
  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const totalCourses = new Set(students.map((student) => student.course).filter(Boolean)).size;

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_28%),linear-gradient(180deg,_#07111f_0%,_#0f172a_56%,_#111827_100%)]" />
      <div className="absolute left-[-8rem] top-24 -z-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-[-6rem] top-72 -z-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-5">
              <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Student hub
              </span>
              <div className="space-y-3">
                <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  A polished dashboard for student records.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  Create, edit, and manage students in a layout that stays clean on phones, tablets, and large screens.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Students</p>
                  <p className="mt-2 text-2xl font-bold text-white">{students.length}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Courses</p>
                  <p className="mt-2 text-2xl font-bold text-white">{totalCourses}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Status</p>
                  <p className="mt-2 text-2xl font-bold text-emerald-300">Live</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setEditingStudent(null);
                setShowForm(!showForm);
              }}
              className="btn-primary w-full shrink-0 sm:w-auto"
            >
              {showForm ? 'Close form' : 'Add student'}
            </button>
          </div>
        </section>

        <div className="mt-8 grid gap-8 xl:grid-cols-[380px_minmax(0,1fr)]">
          <aside className="space-y-6">
            {showForm ? (
              <StudentForm
                student={editingStudent}
                onSubmit={editingStudent ? handleUpdateStudent : handleAddStudent}
              />
            ) : (
              <div className="rounded-[2rem] border border-dashed border-white/15 bg-white/5 p-6 text-slate-300 shadow-xl shadow-slate-950/20 backdrop-blur-sm">
                <h2 className="text-xl font-semibold text-white">Ready to add a student?</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Open the form to create a new record or select a student card to edit an existing entry.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-primary mt-6 w-full"
                >
                  Open form
                </button>
              </div>
            )}

            {error && (
              <div className="rounded-2xl border border-rose-400/30 bg-rose-500/10 p-4 text-rose-100 shadow-lg shadow-rose-950/20">
                <p className="font-semibold">Unable to load students</p>
                <p className="mt-1 text-sm leading-6 text-rose-100/90">{error}</p>
              </div>
            )}
          </aside>

          <section className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Student roster</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Managed records</h2>
              </div>
              <p className="text-sm text-slate-300">
                {loading ? 'Refreshing roster...' : `${students.length} record${students.length === 1 ? '' : 's'} available`}
              </p>
            </div>

            {loading && (
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-sky-300/30 border-t-sky-300" />
                <p className="mt-4 text-lg font-medium text-white">Loading students...</p>
                <p className="mt-2 text-sm text-slate-300">Fetching the latest records from the backend.</p>
              </div>
            )}

            {!loading && students.length > 0 && (
              <div className="grid grid-cols-1 gap-6">
                {students.map((student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                    onEdit={handleEditStudent}
                    onDelete={handleDeleteStudent}
                  />
                ))}
              </div>
            )}

            {!loading && students.length === 0 && !error && (
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white">No students yet</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Add the first student to populate the roster and start managing records.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-primary mt-6"
                >
                  Create the first student
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
