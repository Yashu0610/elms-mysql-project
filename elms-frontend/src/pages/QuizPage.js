import React, { useState } from 'react';
import { Container, Card, Button, Form, Alert } from 'react-bootstrap';

// Sample quiz data. This will eventually come from the backend API.
const quizData = {
  title: 'Spring Boot Fundamentals',
  questions: [
    {
      id: 1,
      questionText: 'What annotation is used to mark a class as a REST controller?',
      options: ['@Controller', '@RestController', '@Service', '@Repository'],
      correctAnswer: '@RestController',
    },
    {
      id: 2,
      questionText: 'Which file is used for configuring database connections in Spring Boot?',
      options: ['pom.xml', 'application.properties', 'web.xml', 'beans.xml'],
      correctAnswer: 'application.properties',
    },
    {
      id: 3,
      questionText: 'What does JPA stand for?',
      options: [
        'Java Persistence API',
        'Java Programming API',
        'JSON Persistence API',
        'Java Primary API', // ✅ fixed broken string
      ],
      correctAnswer: 'Java Persistence API',
    },
  ],
};

const QuizPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: option,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let currentScore = 0;
    quizData.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        currentScore++;
      }
    });
    setScore(currentScore);
    // TODO: In the future, POST these results to a backend endpoint.
  };

  return (
    <Container style={{ paddingTop: '2rem' }}>
      <Card>
        <Card.Header as="h2">{quizData.title}</Card.Header>
        <Card.Body>
          {score !== null ? (
            <Alert variant="success">
              <h4>Quiz Submitted!</h4>
              <p>
                Your Score: {score} / {quizData.questions.length}
              </p>
            </Alert>
          ) : (
            <Form onSubmit={handleSubmit}>
              {quizData.questions.map((q, index) => (
                <div key={q.id} className="mb-4">
                  <h5>
                    {index + 1}. {q.questionText}
                  </h5>
                  {q.options.map((option) => (
                    <Form.Check
                      key={option}
                      type="radio"
                      id={`question-${q.id}-option-${option}`}
                      label={option}
                      name={`question-${q.id}`}
                      value={option}
                      onChange={() => handleOptionChange(q.id, option)}
                      required
                    />
                  ))}
                </div>
              ))}
              <Button variant="primary" type="submit">
                Submit Quiz
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default QuizPage;
