import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

type Course = {
  id: number;
  name: string;
};

type Instructor = {
  id: number;
  firstName: string;
  lastName: string;
};

type Student = {
  id: number;
  firstName: string;
  lastName: string;
};

type VehicleAssignment = {
  id: number;
  vehicleId: number;
  instructorId: number;
};

type LessonType = {
  vehicleAssignment: VehicleAssignment;
  student: Student;
  course: Course;
  instructor: Instructor;
  lessonDate: string;
  startTime: string;
  endTime: string;
};

const AddLessons: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [studentList, setStudentList] = useState<Student[]>([]);
  const [instructorList, setInstructorList] = useState<Instructor[]>([]);
  const [vehicleAssignmentList, setVehicleAssignmentList] = useState<VehicleAssignment[]>([]);

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);
  const [selectedVehicleAssignment, setSelectedVehicleAssignment] = useState<VehicleAssignment | null>(null);

  const schema: ZodType<LessonType> = z.object({
    vehicleAssignment: z.object({
      id: z.number(),
      vehicleId: z.number(),
      instructorId: z.number(),
    }).optional(),
    student: z.object({
      id: z.number(),
      firstName: z.string(),
      lastName: z.string(),
    }).optional(),
    course: z.object({
      id: z.number(),
      name: z.string(),
    }).optional(),
    instructor: z.object({
      id: z.number(),
      firstName: z.string(),
      lastName: z.string(),
    }).optional(),
    lessonDate: z.string().nonempty('Lesson date is required'),
    startTime: z.string().nonempty('Start time is required'),
    endTime: z.string().nonempty('End time is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<LessonType>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [courses, students, instructors, vehicleAssignments] = await Promise.all([
          axios.get('http://localhost:8080/api/courses'),
          axios.get('http://localhost:8080/api/students'),
          axios.get('http://localhost:8080/api/instructors'),
          axios.get('http://localhost:8080/api/vehicles/assignable'),
        ]);
        setCourseList(courses.data);
        setStudentList(students.data);
        setInstructorList(instructors.data);
        setVehicleAssignmentList(vehicleAssignments.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async (data: LessonType) => {
    try {
      // Send the entire Lesson object with full entities instead of IDs
      const lessonData = {
        vehicleAssignment: selectedVehicleAssignment,
        student: selectedStudent,
        course: selectedCourse,
        instructor: selectedInstructor,
        lessonDate: data.lessonDate,
        startTime: data.startTime,
        endTime: data.endTime,
      };

      const response = await axios.post('http://localhost:8080/api/lessons', lessonData);
      setDisabled(true);
      alert("Added new lesson successfully");
      window.location.reload();
    } catch (err) {
      console.error('Error adding lesson:', err);
      alert('Error adding lesson.');
    }
  };

  return (
    <div className="grid w-14/12 place-items-center">
      <div className="p-12 bg-white">
        <h1 className="text-xl font-semibold">Add Lesson</h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="vehicleAssignment" className="block text-xs font-semibold text-gray-600 uppercase">
            Vehicle Assignment
          </label>
          <select
            id="vehicleAssignment"
            value={selectedVehicleAssignment?.id || ''}
            onChange={(e) => setSelectedVehicleAssignment(vehicleAssignmentList.find(v => v.id === Number(e.target.value)) || null)}
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.vehicleAssignment && 'border-red-500'}`}
          >
            <option value="">Select Vehicle Assignment</option>
            {vehicleAssignmentList.map((vehicleAssignment) => (
              <option key={vehicleAssignment.id} value={vehicleAssignment.id}>
                {vehicleAssignment.vehicleId}
              </option>
            ))}
          </select>

          <label htmlFor="student" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Student
          </label>
          <select
            id="student"
            value={selectedStudent?.id || ''}
            onChange={(e) => setSelectedStudent(studentList.find(s => s.id === Number(e.target.value)) || null)}
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.student && 'border-red-500'}`}
          >
            <option value="">Select Student</option>
            {studentList.map((student) => (
              <option key={student.id} value={student.id}>
                {student.firstName} {student.lastName}
              </option>
            ))}
          </select>

          <label htmlFor="course" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Course
          </label>
          <select
            id="course"
            value={selectedCourse?.id || ''}
            onChange={(e) => setSelectedCourse(courseList.find(c => c.id === Number(e.target.value)) || null)}
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.course && 'border-red-500'}`}
          >
            <option value="">Select Course</option>
            {courseList.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>

          <label htmlFor="instructor" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Instructor
          </label>
          <select
            id="instructor"
            value={selectedInstructor?.id || ''}
            onChange={(e) => setSelectedInstructor(instructorList.find(i => i.id === Number(e.target.value)) || null)}
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.instructor && 'border-red-500'}`}
          >
            <option value="">Select Instructor</option>
            {instructorList.map((instructor) => (
              <option key={instructor.id} value={instructor.id}>
                {instructor.firstName} {instructor.lastName}
              </option>
            ))}
          </select>

          <label htmlFor="lessonDate" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Lesson Date
          </label>
          <input
            id="lessonDate"
            type="date"
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.lessonDate && 'border-red-500'}`}
            {...register('lessonDate', { required: true })}
          />
          {errors.lessonDate && <span className="text-red-500 text-xs">{errors.lessonDate.message}</span>}

          <label htmlFor="startTime" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            Start Time
          </label>
          <input
            id="startTime"
            type="time"
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.startTime && 'border-red-500'}`}
            {...register('startTime', { required: true })}
          />
          {errors.startTime && <span className="text-red-500 text-xs">{errors.startTime.message}</span>}

          <label htmlFor="endTime" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">
            End Time
          </label>
          <input
            id="endTime"
            type="time"
            className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.endTime && 'border-red-500'}`}
            {...register('endTime', { required: true })}
          />
          {errors.endTime && <span className="text-red-500 text-xs">{errors.endTime.message}</span>}

          <button
            type="submit"
            className="mt-6 w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
            disabled={disabled}
          >
            Add Lesson
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLessons;
