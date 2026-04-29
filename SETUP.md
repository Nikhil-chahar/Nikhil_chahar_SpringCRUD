# Spring Boot JDBC CRUD Application - Student Management System

## Project Overview
This is a complete full-stack application with a **Spring Boot REST API backend** and **React frontend** demonstrating CRUD (Create, Read, Update, Delete) operations using JDBC and PostgreSQL. The application follows a layered architecture with proper separation of concerns and includes a responsive, mobile-first user interface.

## Architecture

### Layered Structure
```
Controller Layer      → Handles HTTP requests and responses
    ↓
Service Layer        → Business logic and validation
    ↓
Repository Layer     → Data access using JDBC
    ↓
Database (PostgreSQL) → Persistent storage
```

### Components

1. **Student Model** (`Student.java`)
   - Entity class with fields: id, name, email, course
   - Uses Lombok for automatic getter/setter generation

2. **StudentRepository** (`StudentRepository.java`)
   - Data Access Layer using JdbcTemplate
   - Implements CRUD operations with JDBC
   - Manual SQL query handling

3. **StudentService** (`StudentService.java`)
   - Business Logic Layer
   - Delegates to repository for data operations
   - Can be extended with validation logic

4. **StudentController** (`StudentController.java`)
   - REST API Layer
   - Defines endpoints for all CRUD operations
   - Handles HTTP status codes and responses

## Prerequisites

- Java 21 or higher
- PostgreSQL 12 or higher
- Gradle 8.0 or higher (included via gradlew)

## Setup Instructions

### 1. Install PostgreSQL
Download and install PostgreSQL from https://www.postgresql.org/download/

### 2. Create Database
Connect to PostgreSQL and run:
```sql
CREATE DATABASE midterm_db;
```

### 3. Configure Database Connection
Edit `src/main/resources/application.properties` and update:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/midterm_db
spring.datasource.username=postgres
spring.datasource.password=your_password
```

### 4. Initialize Database Schema
Run the SQL script from `src/main/resources/schema.sql` using pgAdmin or command line:
```bash
psql -U postgres -d midterm_db -f src/main/resources/schema.sql
```

Or execute the SQL commands directly in pgAdmin.

### 5. Build and Run the Application

#### Start the Backend:
```bash
# Build the project
./gradlew clean build

# Run the application
./gradlew bootRun
```

The backend will start on `http://localhost:8080`

#### Start the Frontend:

In a **new terminal**:
```bash
cd frontend
npm install  # First time only
npm start
```

The frontend will open on `http://localhost:3000`

**Note:** Both backend and frontend must be running for the full application to work.

## Using the Application

### Web Interface
Once both backend and frontend are running:
1. Open browser to `http://localhost:3000`
2. You'll see the Student Management System dashboard
3. Click "Add New Student" to create a student
4. View, edit, or delete students from the dashboard
5. All changes are persisted to the database

### Responsive Design
The frontend automatically adapts to:
- **Mobile phones**: Single column layout
- **Tablets**: Two column grid
- **Desktops**: Three column grid

All buttons and forms are optimized for touch and mouse input.

## API Endpoints

### 1. Create a Student
**Request:**
```bash
POST /students
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "course": "Computer Science"
}
```

**Response:** `201 Created`
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "course": "Computer Science"
}
```

### 2. Get All Students
**Request:**
```bash
GET /students
```

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "course": "Computer Science"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "course": "Mathematics"
  }
]
```

### 3. Get a Student by ID
**Request:**
```bash
GET /students/1
```

**Response:** `200 OK`
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "course": "Computer Science"
}
```

**Response (Not Found):** `404 Not Found`

### 4. Update a Student
**Request:**
```bash
PUT /students/1
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.updated@example.com",
  "course": "Engineering"
}
```

**Response:** `200 OK`
```
"Student updated successfully"
```

### 5. Delete a Student
**Request:**
```bash
DELETE /students/1
```

**Response:** `200 OK`
```
"Student deleted successfully"
```

## Testing with cURL

### Create
```bash
curl -X POST http://localhost:8080/students \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Johnson","email":"alice@example.com","course":"Physics"}'
```

### Read All
```bash
curl http://localhost:8080/students
```

### Read by ID
```bash
curl http://localhost:8080/students/1
```

### Update
```bash
curl -X PUT http://localhost:8080/students/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Updated","email":"alice.updated@example.com","course":"Chemistry"}'
```

### Delete
```bash
curl -X DELETE http://localhost:8080/students/1
```

## Testing with Postman

1. Import the endpoints into Postman
2. Use the examples above to test each operation
3. Monitor responses and verify data in PostgreSQL

## File Structure

```
src/main/
├── java/com/example/midterm/
│   ├── MidtermApplication.java       (Main Application)
│   ├── controller/
│   │   └── StudentController.java    (REST API Layer)
│   ├── service/
│   │   └── StudentService.java       (Business Logic Layer)
│   ├── repository/
│   │   └── StudentRepository.java    (Data Access Layer)
│   └── model/
│       └── Student.java              (Entity Model)
└── resources/
    ├── application.properties        (Configuration)
    ├── schema.sql                   (Database Schema)
    ├── static/                      (Static Files)
    └── templates/                   (HTML Templates)
```

## Key Technologies

- **Spring Boot 4.0.6**: Framework for building the application
- **Spring JDBC/JdbcTemplate**: For database operations
- **PostgreSQL**: Relational database
- **Lombok**: Reduces boilerplate code (annotations)
- **Gradle**: Build and dependency management
- **Java 21**: Programming language

## JDBC Features Used

1. **JdbcTemplate**: Spring's abstraction over JDBC
2. **RowMapper**: Converting ResultSet to Java objects
3. **PreparedStatements**: Secure SQL execution (prevents SQL injection)
4. **Exception Handling**: Graceful error handling

## Important Notes

- IDrontend Information

### Technology Stack
- **React 18**: Modern UI library
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Axios**: HTTP client for API requests
- **React Scripts**: Build tools

### Features
✅ Fully responsive design (mobile, tablet, desktop)
✅ Real-time form validation
✅ Loading states and error handling
✅ Smooth animations and transitions
✅ Grid layout that adapts to screen size
✅ Intuitive user interface
✅ Confirmation dialogs for destructive actions

### For More Details
See [FRONTEND_README.md](FRONTEND_README.md) for detailed frontend setup and documentation.

## Future Enhancements

- Add validation using @Valid and bean validation annotations
- Implement pagination for large datasets
- Add custom exceptions and global exception handling
- Create data transfer objects (DTOs)
- Add logging and monitoring
- Implement database transactions
- Add unit and integration tests
- Add authentication and authorization
- Implement search and filter functionality
- Add student photo support
- Create admin dashboard with analytic
- Verify database URL and credentials in application.properties

### Table Not Found
- Run the schema.sql script to create the table

### Gradle Build Issues
- Clear the build directory: `./gradlew clean`
- Rebuild: `./gradlew build`

## Future Enhancements

- Add validation using @Valid and bean validation annotations
- Implement pagination for large datasets
- Add custom exceptions and global exception handling
- Create data transfer objects (DTOs)
- Add logging and monitoring
- Implement database transactions
- Add unit and integration tests
