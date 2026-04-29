import React from 'react';

const StudentCard = ({ student, onEdit, onDelete }) => {
  const initials = (student.name || 'Student')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

  return (
    <div className="group w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/20 ring-1 ring-white/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-2xl hover:shadow-cyan-950/20 min-h-[360px] lg:min-h-[390px]">
      <div className="h-1.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400" />

      <div className="p-6 lg:p-8">
        <div className="mb-6 flex items-start gap-4 lg:gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 text-xl font-bold text-slate-950 shadow-lg shadow-cyan-950/30 ring-4 ring-white/10 lg:h-18 lg:w-18">
            {initials}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="truncate text-2xl font-bold text-white lg:text-[1.7rem]">{student.name}</h2>
                <p className="mt-2 truncate text-sm leading-6 text-slate-300 lg:text-base">{student.email}</p>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">
                ID {student.id}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-inset ring-cyan-400/20">
            {student.course}
          </span>
          <span className="rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 ring-1 ring-inset ring-white/10">
            Student record
          </span>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 sm:grid-cols-2 lg:p-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Student ID</p>
            <p className="mt-2 text-base font-medium text-white">{student.id}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Course</p>
            <p className="mt-2 text-base font-medium text-white">{student.course}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => onEdit(student)}
            className="btn-primary flex-1 py-3.5"
            aria-label={`Edit ${student.name}`}
          >
            Edit student
          </button>
          <button
            onClick={() => onDelete(student.id)}
            className="btn-danger flex-1 py-3.5"
            aria-label={`Delete ${student.name}`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
