import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { Container } from 'react-bootstrap'; 
import AppNavbar from './components/AppNavbar'; 
 
// Import page components (they will be created by other team members) 
// import LoginPage from './pages/LoginPage'; 
// import DashboardPage from './pages/DashboardPage'; 
// import CourseDetailPage from './pages/CourseDetailPage'; 
 
function App() { 
  return ( 
    <Router> 
      <AppNavbar /> 
      <Container> 
        <Routes> 
          {/* The login page will be the default route */} 
          {/* <Route path="/" element={<LoginPage />} /> */} 
          {/* <Route path="/dashboard" element={<DashboardPage />} /> */} 
          {/* <Route path="/course/:courseId" element={<CourseDetailPage />} /> */} 
        </Routes> 
      </Container> 
    </Router> 
  ); 
} 
export default App; 