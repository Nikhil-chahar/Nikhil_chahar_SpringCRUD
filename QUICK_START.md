# Quick Start Guide - Running the Full Application

## Prerequisites Checklist
- [ ] PostgreSQL installed and running
- [ ] Java 21 installed (`java -version`)
- [ ] Node.js 16+ installed (`node -v` and `npm -v`)
- [ ] Database created: `psql -U postgres -c "CREATE DATABASE midterm_db;"`

## 🚀 Running the Application (3 Steps)

### Step 1: Start PostgreSQL
Ensure PostgreSQL is running on your system (default port 5432)

### Step 2: Start the Backend
```bash
cd c:\Users\nikhi\Desktop\midterm
.\gradlew bootRun
```
✅ Backend starts on: `http://localhost:8080`

Wait for the message: `Tomcat started on port 8080`

### Step 3: Start the Frontend
Open a **NEW terminal** and run:
```bash
cd c:\Users\nikhi\Desktop\midterm\frontend
npm install  # Only needed first time
npm start
```
✅ Frontend opens on: `http://localhost:3000`

---

## ✨ Using the Application

Once both are running, you'll see:

### Main Dashboard
- **Add New Student** button to create students
- **Student Cards** displaying all students in a responsive grid
- **Edit Button** on each card to modify student
- **Delete Button** on each card to remove student

### Creating a Student
1. Click "Add New Student"
2. Fill in: Name, Email, Course
3. Click "Create Student"
4. Student appears on dashboard instantly

### Editing a Student
1. Click "Edit" on any student card
2. Form appears with current student data
3. Update fields
4. Click "Update Student"

### Deleting a Student
1. Click "Delete" on student card
2. Confirm in popup
3. Student removed from database and dashboard

---

## 📱 Responsive Design

The application automatically adapts:
- **📱 Mobile (< 640px)**: Single column layout
- **📱 Tablet (640px - 1024px)**: Two columns
- **🖥️ Desktop (> 1024px)**: Three columns

All components are touch-friendly and work perfectly on all devices.

---

## 🛠 Terminal Setup

### Windows PowerShell
```powershell
# Terminal 1: Backend
cd c:\Users\nikhi\Desktop\midterm
.\gradlew bootRun

# Terminal 2: Frontend (new terminal)
cd c:\Users\nikhi\Desktop\midterm\frontend
npm start
```

### Quick Test
Try this after everything is running:
```bash
# In another terminal, create a student
curl -X POST http://localhost:8080/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Student","email":"test@example.com","course":"Computer Science"}'

# You should see it appear on http://localhost:3000 immediately!
```

---

## 🔍 Troubleshooting

### Backend won't start
```
Error: database "midterm_db" does not exist

Fix: psql -U postgres -c "CREATE DATABASE midterm_db;"
```

### Frontend won't connect to backend
```
Error: Network request failed

Fix: Ensure backend is running on http://localhost:8080
Check: .env file has REACT_APP_API_URL=http://localhost:8080/students
```

### Port already in use
```bash
# Use different port for frontend
PORT=3001 npm start

# For backend, edit application.properties:
server.port=8081
```

### npm install fails
```bash
# Clear cache and retry
npm cache clean --force
npm install
```

---

## 📊 Architecture Diagram

```
┌─────────────────────────────────────────┐
│         React Frontend                  │
│     (Port 3000)                         │
│  ├─ StudentList                         │
│  ├─ StudentCard                         │
│  └─ StudentForm                         │
└──────────────────┬──────────────────────┘
                   │
              (HTTP/REST)
              CORS Enabled
                   │
┌──────────────────▼──────────────────────┐
│    Spring Boot Backend                  │
│      (Port 8080)                        │
│  ├─ StudentController                   │
│  ├─ StudentService                      │
│  ├─ StudentRepository                   │
│  └─ CorsConfig                          │
└──────────────────┬──────────────────────┘
                   │
              (JDBC)
                   │
┌──────────────────▼──────────────────────┐
│    PostgreSQL Database                  │
│    (Port 5432)                          │
│    - students table                     │
└─────────────────────────────────────────┘
```

---

## 🎯 Common Tasks

### View all students
```
GET http://localhost:8080/students
```

### View specific student
```
GET http://localhost:8080/students/1
```

### Create from command line
```bash
curl -X POST http://localhost:8080/students \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","course":"CS"}'
```

---

## 📚 Documentation
- [Main README.md](README.md) - Project overview
- [SETUP.md](SETUP.md) - Detailed backend setup
- [FRONTEND_README.md](FRONTEND_README.md) - Frontend details

---

## ✅ Checklist to Run Application

- [ ] PostgreSQL running
- [ ] Terminal 1: `.\gradlew bootRun` (wait for "Tomcat started")
- [ ] Terminal 2: `cd frontend && npm start`
- [ ] Browser opens to `http://localhost:3000`
- [ ] Can see "Student Management System" heading
- [ ] Can click "Add New Student"
- [ ] Can create a student
- [ ] Student appears in grid
- [ ] Can edit student
- [ ] Can delete student
- [ ] Grid is responsive on different screen sizes

---

**🎉 You're all set! Start developing!**
