import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom'; 
import axios from 'axios'; 
import { Container, Tabs, Tab, Spinner, Card } from 'react-bootstrap'; 
 
const CourseDetailPage = () => { 
    const { courseId } = useParams(); 
    const [lessons, setLessons] = useState([]); 
    const [loading, setLoading] = useState(true); 
 
    useEffect(() => { 
        const fetchLessons = async () => { 
            try { 
                const res = await axios.get(`http://localhost:8080/api/courses/${courseId}/lessons`); 
                setLessons(res.data); 
            } catch (error) { 
                console.error("Error fetching lessons", error); 
            } finally { 
                setLoading(false); 
            } 
        }; 
        fetchLessons(); 
    }, [courseId]); 
 
    if (loading) return <Spinner animation="border" />; 
     return ( 
        <Container> 
            <h2>Course Content</h2> 
            <Tabs defaultActiveKey="lessons" className="mb-3"> 
                <Tab eventKey="lessons" title="Lessons"> 
                    {lessons.map(lesson => ( 
                       <Card key={lesson.id} className="mb-2"> 
                           <Card.Body>{lesson.title}</Card.Body> 
                       </Card> 
                    ))} 
                </Tab> 
                <Tab eventKey="assignments" title="Assignments"> 
                    <p>Assignments will be listed here.</p> 
                </Tab> 
                <Tab eventKey="quizzes" title="Quizzes"> 
                    <p>Quizzes will be listed here.</p> 
                </Tab> 
            </Tabs> 
        </Container> 
    ); 
}; 
export default CourseDetailPage;