# Student Management System - Full Stack Application

A complete web application for managing students with a **Spring Boot REST API backend** and **React frontend** with responsive design.

## 🎯 Project Overview

This project demonstrates a full-stack web application with:
- **Backend**: Spring Boot 4.0.6 with JDBC and PostgreSQL
- **Frontend**: React 18 with Tailwind CSS
- **Architecture**: Layered architecture (Controller → Service → Repository)
- **API**: RESTful API with CORS enabled
- **Responsive Design**: Mobile-first UI that works on all devices

## 📋 Prerequisites

- **Java 21** or higher
- **Node.js 16+** and npm
- **PostgreSQL 12+**
- **Git**

## 🚀 Quick Start

### 1. Database Setup

First, install and set up PostgreSQL:

```bash
# Create the database
psql -U postgres -c "CREATE DATABASE midterm_db;"

# Run the schema (optional - backend can auto-create)
psql -U postgres -d midterm_db -f src/main/resources/schema.sql
```

### 2. Backend Setup

```bash
# Update application.properties with your PostgreSQL credentials
# src/main/resources/application.properties
spring.datasource.url=jdbc:postgresql://localhost:5432/midterm_db
spring.datasource.username=postgres
spring.datasource.password=your_password

# Build and run backend
./gradlew bootRun
# Server runs on http://localhost:8080
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
# App opens on http://localhost:3000
```

## 📁 Project Structure

```
midterm/
├── src/
│   └── main/
│       ├── java/com/example/midterm/
│       │   ├── MidtermApplication.java       (Main app)
│       │   ├── config/
│       │   │   └── CorsConfig.java           (CORS setup)
│       │   ├── controller/
│       │   │   └── StudentController.java    (REST API)
│       │   ├── service/
│       │   │   └── StudentService.java       (Business logic)
│       │   ├── repository/
│       │   │   └── StudentRepository.java    (Data access)
│       │   └── model/
│       │       └── Student.java              (Entity)
│       └── resources/
│           ├── application.properties        (Config)
│           └── schema.sql                    (DB schema)
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── studentApi.js                 (API client)
│   │   ├── components/
│   │   │   ├── StudentList.jsx               (Main component)
│   │   │   ├── StudentCard.jsx               (Student display)
│   │   │   └── StudentForm.jsx               (Form component)
│   │   ├── App.js                            (Root component)
│   │   └── index.css                         (Styles)
│   ├── public/
│   │   └── index.html                        (HTML template)
│   ├── .env                                  (Environment config)
│   ├── tailwind.config.js                    (Tailwind config)
│   └── package.json                          (Dependencies)
├── build.gradle                              (Gradle config)
├── SETUP.md                                  (Backend setup guide)
├── FRONTEND_README.md                        (Frontend setup guide)
└── README.md                                 (This file)
```

## 🔗 API Endpoints

All endpoints available at `http://localhost:8080/students`

### Create Student
```bash
POST /students
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "course": "Computer Science"
}
```

### Get All Students
```bash
GET /students
```

### Get Student by ID
```bash
GET /students/1
```

### Update Student
```bash
PUT /students/1
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "updated@example.com",
  "course": "Engineering"
}
```

### Delete Student
```bash
DELETE /students/1
```

## 🎨 Frontend Features

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect layout on medium screens
- **Desktop View**: Full-featured on large screens
- **Tailwind CSS**: Utility-first styling framework

### Components
- **StudentList**: Main page with grid of students
- **StudentCard**: Individual student display with edit/delete
- **StudentForm**: Create/Edit form with validation

### User Actions
- ✅ View all students in responsive grid
- ✅ View student details (ID, Name, Email, Course)
- ✅ Create new student via form
- ✅ Edit student information
- ✅ Delete student with confirmation
- ✅ Real-time validation
- ✅ Error handling and loading states

## 🛠 Tech Stack

### Backend
- Spring Boot 4.0.6
- Spring JDBC/JdbcTemplate
- PostgreSQL Driver
- Lombok
- Java 21

### Frontend
- React 18
- Tailwind CSS 3
- Axios
- React Scripts

## 📝 Configuration

### Backend Configuration
Edit `src/main/resources/application.properties`:
```properties
# Database
spring.datasource.url=jdbc:postgresql://localhost:5432/midterm_db
spring.datasource.username=postgres
spring.datasource.password=your_password

# Server
server.port=8080
```

### Frontend Configuration
Edit `frontend/.env`:
```env
REACT_APP_API_URL=http://localhost:8080/students
```

## 🧪 Testing with cURL

```bash
# Create a student
curl -X POST http://localhost:8080/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","course":"Physics"}'

# Get all students
curl http://localhost:8080/students

# Get by ID
curl http://localhost:8080/students/1

# Update
curl -X PUT http://localhost:8080/students/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Updated","email":"alice.updated@example.com","course":"Chemistry"}'

# Delete
curl -X DELETE http://localhost:8080/students/1
```

## 🐛 Troubleshooting

### Backend Issues

**Connection Refused**
```
Solution: Ensure PostgreSQL is running
```

**Database Not Found**
```
Solution: Create database: psql -U postgres -c "CREATE DATABASE midterm_db;"
```

**Build Fails**
```bash
./gradlew clean
./gradlew build
```

### Frontend Issues

**CORS Error**
```
Solution: Ensure CORS config is in CorsConfig.java and backend is running
```

**API Not Responding**
```
Solution: Check REACT_APP_API_URL in .env matches backend URL
```

**Port Already in Use**
```bash
PORT=3001 npm start  # Use different port
```

## 📖 Documentation

- [Backend Setup Guide](SETUP.md)
- [Frontend Setup Guide](FRONTEND_README.md)

## 🔐 Security Notes

- Email fields are unique in database
- Input validation on both frontend and backend
- CORS restricted to localhost for development
- SQL injection prevention via JdbcTemplate

## 📦 Building for Production

### Backend
```bash
./gradlew build
java -jar build/libs/midterm-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd frontend
npm run build
# Outputs to frontend/build/ directory
```

## 🚀 Deployment

To deploy to production:

1. Set up PostgreSQL on production server
2. Update `application.properties` with production database credentials
3. Build backend: `./gradlew build`
4. Build frontend: `cd frontend && npm run build`
5. Deploy backend JAR and frontend build files

## 📞 Support

For issues or questions:
1. Check the troubleshooting sections in SETUP.md and FRONTEND_README.md
2. Verify all prerequisites are installed
3. Ensure both PostgreSQL and backend are running before starting frontend
4. Check browser console for frontend errors
5. Check terminal logs for backend errors

## 📄 License

This project is provided as-is for educational purposes.

## ✨ Features Implemented

✅ Spring Boot REST API
✅ JDBC Database Integration
✅ PostgreSQL Support
✅ CORS Configuration
✅ Layered Architecture
✅ React Frontend
✅ Responsive Design
✅ Form Validation
✅ Error Handling
✅ Loading States
✅ Tailwind CSS Styling
✅ Full CRUD Operations

## 🎓 Learning Outcomes

This project demonstrates:
- Full-stack web application development
- Backend API design with Spring Boot
- Frontend development with React
- Database integration with JDBC
- Responsive web design
- REST API best practices
- Error handling and validation
- Component-based architecture

---

**Happy coding! 🎉**
#   N i k h i l _ c h a h a r _ S p r i n g C R U D  
 