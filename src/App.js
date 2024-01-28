import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

const CourseList = ({ courses }) => (
  <ul>
    {courses.map(course => (
      <li key={course.id}>
        <strong>{course.title}</strong> - {course.body}
      </li>
    ))}
  </ul>
);

const CourseDetails = ({ match }) => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await axios.get(`${apiEndpoint}/${match.params.id}`);
      setCourse(response.data);
    };

    fetchCourse();
  }, [match.params.id]);

  return (
    <div>
      {course ? (
        <div>
          <h2>{course.title}</h2>
          <p>{course.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(apiEndpoint);
      setCourses(response.data);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Quality Education App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Route
          path="/"
          exact
          render={() => <CourseList courses={courses} />}
        />
        <Route path="/course/:id" component={CourseDetails} />
      </div>
    </Router>
  );
};

export default App;


