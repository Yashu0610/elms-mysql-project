import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Main layout component
import AppNavbar from './components/AppNavbar';

// Import all page components to create the full application
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CourseDetailPage from './pages/CourseDetailPage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Container className="mt-4">
        <Routes>
          {/* Add all the routes for the integrated application */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />
          <Route path="/quiz/:quizId" element={<QuizPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;