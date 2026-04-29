# Frontend Setup Instructions

## Prerequisites
- Node.js 16+ and npm installed

## Installation Steps

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file (if not exists):**
   ```bash
   cp .env.example .env
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`

## Features

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Fully responsive on all screen sizes
- Optimized for mobile, tablet, and desktop views

### Components

1. **StudentList** - Main component displaying all students
   - Fetches students from backend
   - Displays student cards in responsive grid
   - Shows/hides form for adding new students
   - Displays error messages and loading states

2. **StudentCard** - Individual student display
   - Shows student details (ID, Name, Email, Course)
   - Edit and Delete buttons
   - Responsive layout for all devices

3. **StudentForm** - Form for creating/editing students
   - Input fields for Name, Email, Course
   - Form validation
   - Responsive design
   - Supports both create and update operations

### API Integration

The frontend communicates with the backend via REST API:
- **GET /students** - Fetch all students
- **GET /students/{id}** - Fetch a student by ID
- **POST /students** - Create a new student
- **PUT /students/{id}** - Update a student
- **DELETE /students/{id}** - Delete a student

## Configuration

### Environment Variables

Edit `.env` file to configure:
```env
REACT_APP_API_URL=http://localhost:8080/students
```

### Tailwind CSS

Tailwind configuration is in `tailwind.config.js`:
- Custom color scheme for primary and secondary colors
- Extended utilities for buttons and forms
- Fully customizable theme

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## Troubleshooting

### CORS Errors
- Ensure backend is running on `http://localhost:8080`
- Check CORS configuration in Spring Boot backend

### API Not Responding
- Verify backend is running: `./gradlew bootRun`
- Check `REACT_APP_API_URL` in `.env` file
- Ensure PostgreSQL database is set up and running

### Port Already in Use
If port 3000 is already in use, you can specify a different port:
```bash
PORT=3001 npm start
```

## Development Workflow

1. Start the Spring Boot backend:
   ```bash
   cd .. && ./gradlew bootRun
   ```

2. In another terminal, start the React frontend:
   ```bash
   cd frontend && npm start
   ```

3. Open browser to `http://localhost:3000`

4. Make changes to React components and they'll hot-reload

## File Structure

```
frontend/
├── public/
│   └── index.html              (Main HTML file)
├── src/
│   ├── api/
│   │   └── studentApi.js       (API calls)
│   ├── components/
│   │   ├── StudentList.jsx     (Main list component)
│   │   ├── StudentCard.jsx     (Individual student card)
│   │   └── StudentForm.jsx     (Form for create/edit)
│   ├── App.js                  (Root component)
│   ├── index.js                (React entry point)
│   └── index.css               (Global styles with Tailwind)
├── .env                        (Environment variables)
├── .env.example                (Example env file)
├── tailwind.config.js          (Tailwind configuration)
├── postcss.config.js           (PostCSS configuration)
└── package.json                (Dependencies)
```

## Responsive Design Features

The application uses Tailwind CSS breakpoints:
- **Mobile (default)**: < 640px
- **Small devices (sm)**: ≥ 640px
- **Medium devices (md)**: ≥ 768px
- **Large devices (lg)**: ≥ 1024px

Examples:
- Grid layout: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Flex layout: `flex-col sm:flex-row`
- Buttons adapt size based on screen width
- Font sizes scale responsively

## Technologies Used

- **React 18** - UI library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **React Scripts** - Build tools and scripts

## Next Steps

1. Set up PostgreSQL and create the database (see main SETUP.md)
2. Run the Spring Boot backend
3. Install frontend dependencies: `npm install`
4. Start the frontend: `npm start`
5. Begin using the application!
