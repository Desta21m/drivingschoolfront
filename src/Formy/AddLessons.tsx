// AddLesson.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

type LessonType = {
    vehicleAssignmentId: number;
    studentId: number;
    courseId: number;
    instructorId: number;
    lessonDate: string;
    startTime: string;
    endTime: string;
};

const AddLessons: React.FC = () => {
    const [disabled, setDisabled] = useState(false);

    const schema: ZodType<LessonType> = z.object({
        vehicleAssignmentId: z.number().positive('Must be positive').int('Must be an integer'),
        studentId: z.number().positive('Must be positive').int('Must be an integer'),
        courseId: z.number().positive('Must be positive').int('Must be an integer'),
        instructorId: z.number().positive('Must be positive').int('Must be an integer'),
        lessonDate: z.string().nonempty('Lesson date is required'),
        startTime: z.string().nonempty('Start time is required'),
        endTime: z.string().nonempty('End time is required'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<LessonType>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: LessonType) => {
        try {
            const response = await axios.post('http://localhost:8080/api/lessons', data);
            setDisabled(true);
            alert("Added new lesson successfully");
            window.location.reload(); // reload the page to see updated lessons
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
                    <label htmlFor="vehicleAssignmentId" className="block text-xs font-semibold text-gray-600 uppercase">Vehicle Assignment ID</label>
                    <input 
                        id="vehicleAssignmentId" 
                        type="number" 
                        placeholder="Vehicle Assignment ID" 
                        className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.vehicleAssignmentId && "border-red-500"}`} 
                        {...register('vehicleAssignmentId', { required: true, valueAsNumber:true })} 
                    />
                    {errors.vehicleAssignmentId && <span className="text-red-500 text-xs">{errors.vehicleAssignmentId.message}</span>}

                    <label htmlFor="studentId" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Student ID</label>
                    <input 
                        id="studentId" 
                        type="number" 
                        placeholder="Student ID" 
                        className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.studentId && "border-red-500"}`} 
                        {...register('studentId', { required: true, valueAsNumber:true })} 
                    />
                    {errors.studentId && <span className="text-red-500 text-xs">{errors.studentId.message}</span>}

                    <label htmlFor="courseId" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Course ID</label>
                    <input 
                        id="courseId" 
                        type="number" 
                        placeholder="Course ID" 
                        className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.courseId && "border-red-500"}`} 
                        {...register('courseId', { required: true, valueAsNumber:true })} 
                    />
                    {errors.courseId && <span className="text-red-500 text-xs">{errors.courseId.message}</span>}

                    <label htmlFor="instructorId" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Instructor ID</label>
                    <input 
                        id="instructorId" 
                        type="number" 
                        placeholder="Instructor ID" 
                        className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.instructorId && "border-red-500"}`} 
                        {...register('instructorId', { required: true, valueAsNumber:true })} 
                    />
                    {errors.instructorId && <span className="text-red-500 text-xs">{errors.instructorId.message}</span>}

                    <label htmlFor="lessonDate" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Lesson Date</label>
                    <input 
                        id="lessonDate" 
                        type="date" 
                        className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.lessonDate && "border-red-500"}`} 
                        {...register('lessonDate', { required: true })} 
                    />
                    {errors.lessonDate && <span className="text-red-500 text-xs">{errors.lessonDate.message}</span>}

                    <label htmlFor="startTime" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Start Time</label>
                    <input 
                        id="startTime" 
                        type="time" 
                        className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.startTime && "border-red-500"}`} 
                        {...register('startTime', { required: true })} 
                    />
                    {errors.startTime && <span className="text-red-500 text-xs">{errors.startTime.message}</span>}

                    <label htmlFor="endTime" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">End Time</label>
                    <input 
                        id="endTime" 
                        type="time" 
                        className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner ${errors.endTime && "border-red-500"}`} 
                        {...register('endTime', { required: true })} 
                    />
                    {errors.endTime && <span className="text-red-500 text-xs">{errors.endTime.message}</span>}

                    <button 
                        type="submit" 
                        disabled={disabled} 
                        className="w-full py-3 mt-6 text-white bg-gray-800 uppercase shadow-lg focus:outline-none hover:bg-gray-400 hover:shadow-none"
                    >
                        Add Lesson
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddLessons;
