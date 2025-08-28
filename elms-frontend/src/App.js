import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Router>
      <div className="App">
        

        <main>
          <Routes>
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}



export default App;
