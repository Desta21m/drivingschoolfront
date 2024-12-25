import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

type TestType = {
  result: number;
  score: number;
  testDate: Date;
  course: any; // Change to 'any' to hold the full course object
  instructor: any; // Change to 'any' to hold the full instructor object
  student: any; // Change to 'any' to hold the full student object
};

const AddTest: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  const [courseList, setCourseList] = useState<any[]>([]); // 'any' to store course objects
  const [studentList, setStudentList] = useState<any[]>([]); // 'any' to store student objects
  const [instructorList, setInstructorList] = useState<any[]>([]); // 'any' to store instructor objects

  const [selectedcours, setSelectedcourse] = useState<any | null>(null); // Store full course object
  const [selectedstudent, setSelectedstudent] = useState<any | null>(null); // Store full student object
  const [selectedInstructorId, setSelectedInstructor] = useState<any | null>(null); // Store full instructor object

  const schema: ZodType<TestType> = z.object({
    result: z.number(),
    score: z.number().min(0, 'Score must be greater than or equal to 0'),
    testDate: z.date(),
    course: z.object({ id: z.number(), name: z.string() }).optional(), // Ensure course object is present
    instructor: z.object({ id: z.number(), firstName: z.string(), lastName: z.string() }).optional(),
    student: z.object({ id: z.number(), firstName: z.string(), lastName: z.string() }).optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TestType>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const fetchCourseList = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/courses');
        setCourseList(response.data);
      } catch (err) {
        console.error('Error fetching course list:', err);
      }
    };

    const fetchStudentList = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/students');
        setStudentList(response.data);
      } catch (err) {
        console.error('Error fetching student list:', err);
      }
    };

    const fetchInstructorList = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/instructors');
        setInstructorList(response.data);
      } catch (err) {
        console.error('Error fetching instructor list:', err);
      }
    };

    fetchCourseList();
    fetchStudentList();
    fetchInstructorList();
  }, []);

  const onSubmit = async (data: TestType) => {
    try {
      // Prepare the full Test object to be sent to the backend
      const testData = {
        result: data.result === 1,  // Convert result to boolean
        score: data.score,
        testDate: data.testDate,
        course: selectedcours,  // Send the entire Course object
        instructor: selectedInstructorId,  // Send the entire Instructor object
        student: selectedstudent,  // Send the entire Student object
      };

      // Send the entire Test object to the backend
      const response = await axios.post('http://localhost:8080/api/tests', testData);
      setDisabled(true);
      alert('Added new test successfully');
      window.location.reload();
    } catch (err) {
      console.error('Error adding test:', err);
      alert('Error adding test.');
    }
  };

  const handleInstructorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedInstructor = instructorList.find(
      (instructor) => instructor.id === Number(event.target.value)
    );
    setSelectedInstructor(selectedInstructor || null);
  };

  const handlecourseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCourse = courseList.find(
      (course) => course.id === Number(event.target.value)
    );
    setSelectedcourse(selectedCourse || null);
  };

  const handlestudentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStudent = studentList.find(
      (student) => student.id === Number(event.target.value)
    );
    setSelectedstudent(selectedStudent || null);
  };

  return (
    <div className="grid w-14/12 place-items-center">
      <div className="p-12 bg-white">
        <h1 className="text-xl font-semibold">Add Test</h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="result" className="block text-xs font-semibold text-gray-600 uppercase">
            Result
          </label>
          <select
            id="result"
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.result && 'border-red-500'}`}
            {...register('result', { required: true })}
          >
            <option value="">Select Result</option>
            <option value="1">Pass</option>
            <option value="0">Fail</option>
          </select>

          <label htmlFor="score" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Score
          </label>
          <input
            id="score"
            type="number"
            placeholder="Score"
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${
              errors.score && 'border-red-500'
            }`}
            {...register('score', { required: true })}
          />
          {errors.score && <span className="text-red-500 text-xs">{errors.score.message}</span>}

          <label htmlFor="testDate" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Test Date
          </label>
          <input
            id="testDate"
            type="date"
            placeholder="Test Date"
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${
              errors.testDate && 'border-red-500'
            }`}
            {...register('testDate', { required: true })}
          />
          {errors.testDate && <span className="text-red-500 text-xs">{errors.testDate.message}</span>}

          <label htmlFor="courseID" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Course
          </label>
          <select
            id="courseID"
            value={selectedcours?.id || ''}
            onChange={handlecourseChange}
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${
              errors.courseID && 'border-red-500'
            }`}
          >
            <option value="">Select Course</option>
            {courseList.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>

          <label htmlFor="instructorID" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Instructor
          </label>
          <select
            id="instructorID"
            value={selectedInstructorId?.id || ''}
            onChange={handleInstructorChange}
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${
              errors.instructorID && 'border-red-500'
            }`}
          >
            <option value="">Select Instructor</option>
            {instructorList.map((instructor) => (
              <option key={instructor.id} value={instructor.id}>
                {instructor.firstName} {instructor.lastName}
              </option>
            ))}
          </select>

          <label htmlFor="studentID" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Student
          </label>
          <select
            id="studentID"
            value={selectedstudent?.id || ''}
            onChange={handlestudentChange}
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${
              errors.studentID && 'border-red-500'
            }`}
          >
            <option value="">Select Student</option>
            {studentList.map((student) => (
              <option key={student.id} value={student.id}>
                {student.firstName} {student.lastName}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={disabled}
            className="w-full py-3 mt-6 text-white bg-gray-800 uppercase shadow-lg focus:outline-none hover:bg-gray-400 hover:shadow-none"
          >
            Add Test
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTest;
