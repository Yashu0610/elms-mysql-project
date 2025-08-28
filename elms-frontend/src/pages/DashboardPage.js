import React, { useState, useEffect } from 'react'; 
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap'; 
import axios from 'axios'; 
import { Link } from 'react-router-dom'; 
 
const DashboardPage = () => { 
    const [courses, setCourses] = useState([]); 
    const [loading, setLoading] = useState(true); 
 
    useEffect(() => { 
        const fetchCourses = async () => { 
            try { 
                const result = await axios.get('http://localhost:8080/api/courses'); 
                setCourses(result.data); 
            } catch (error) { 
                console.error("Error fetching courses:", error); 
            } finally { 
                setLoading(false); 
            } 
        }; 
        fetchCourses(); 
    }, []); 
 
    if (loading) { 
        return <Spinner animation="border" />; 
    } 
 
    return ( 
        <Container> 
            <h1 className="mb-4">Available Courses</h1> 
              <Row> 
                {courses.map(course => ( 
                    <Col md={4} key={course.id} className="mb-4"> 
                        <Card className="h-100"> 
                            <Card.Body className="d-flex flex-column"> 
                                <Card.Title>{course.title}</Card.Title> 
                                <Card.Text>{course.description}</Card.Text> 
                                <Button as={Link} to={`/course/${course.id}`} variant="primary" className="mt
auto"> 
                                    View Course 
                                </Button> 
                            </Card.Body> 
                        </Card> 
                    </Col> 
                ))} 
            </Row> 
        </Container> 
    ); 
}; 
export default DashboardPage; 
