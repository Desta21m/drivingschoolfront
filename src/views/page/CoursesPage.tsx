import axios from 'axios';
import React, { useEffect, useState } from 'react';

// // Mock dataset for testing
// const mockCourses = [
//     {
//         courseId: 1,
//         courseName: 'Beginner Driving Course',
//         courseDescription: 'An introductory driving course designed for new drivers. Learn the basics of driving and traffic rules.',
//         courseDuration: 20, // in hours
//         courseFee: 150.00, // in dollars
//         lessons: ['Basic vehicle control', 'Traffic signs and signals', 'Rules of the road'],
//         tests: ['Written road safety test', 'Practical driving test']
//       },
//       {
//         courseId: 2,
//         courseName: 'Advanced Defensive Driving',
//         courseDescription: 'An advanced course for experienced drivers to learn defensive driving techniques and avoid accidents.',
//         courseDuration: 15,
//         courseFee: 180.00,
//         lessons: ['Defensive driving techniques', 'Emergency braking', 'Avoiding distracted driving'],
//         tests: ['Practical driving test', 'Accident simulation']
//       },
//       {
//         courseId: 3,
//         courseName: 'Night Driving Course',
//         courseDescription: 'A specialized course focusing on safe driving at night, dealing with reduced visibility and fatigue.',
//         courseDuration: 12,
//         courseFee: 120.00,
//         lessons: ['Night driving basics', 'Handling glare from headlights', 'Nighttime road hazards'],
//         tests: ['Night driving practical test']
//       },
//       {
//         courseId: 4,
//         courseName: 'Teen Driver Education',
//         courseDescription: 'A course specifically designed for teenagers to learn the fundamentals of driving in a safe and controlled environment.',
//         courseDuration: 25,
//         courseFee: 200.00,
//         lessons: ['Starting and stopping the car', 'Turning and lane changes', 'Highway driving'],
//         tests: ['Written test', 'Practical driving test']
//       },
//       {
//         courseId: 5,
//         courseName: 'Road Safety Awareness',
//         courseDescription: 'This course focuses on road safety, understanding traffic laws, and how to respond to emergencies on the road.',
//         courseDuration: 10,
//         courseFee: 90.00,
//         lessons: ['Pedestrian safety', 'Vehicle safety checks', 'First aid for drivers'],
//         tests: ['Road safety written test']
//       },
//       {
//         courseId: 6,
//         courseName: 'Motorcycle Safety Training',
//         courseDescription: 'A course for motorcycle riders to improve their skills, safety awareness, and handling in various road conditions.',
//         courseDuration: 18,
//         courseFee: 160.00,
//         lessons: ['Motorcycle control', 'Handling slippery roads', 'Emergency stopping'],
//         tests: ['Motorcycle skills test', 'Road safety test']
//       },
//       // Add more driving school courses if needed
// ];

const CoursesPage: React.FC = () => {
  // const [courses, setCourses] = useState(mockCourses);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/courses');
        setCourses(response.data);
        console.log(response);
      } catch (err) {
        console.error('Error fetching courses:', err);
      }
    };
    fetchCourses();
  }, []);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.courseId}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{course.courseName}</h2>
              <p className="text-gray-600 mb-4">{course.courseDescription}</p>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <span className="text-gray-500">⏳</span>
                  <span className="text-gray-700">{course.courseDuration} hours</span>
                </div>

                <div className="flex items-center space-x-1">
                  <span className="text-gray-500">💲</span>
                  <span className="text-gray-700">${course.courseFee.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 focus:outline-none">
                  Tack
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
