import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

type CustomerType = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phoneNumber: string;
    email: string;
    address: string;
    referralSource: string;
    companyName:string;
};

const AddCustomer: React.FC = () => {
    const [disabled, setDisabled] = useState(false);

    // Zod validation schema for the Customer data
    const schema: ZodType<CustomerType> = z.object({
        firstName: z.string().max(45, 'Too long').min(1, 'Required'),
        lastName: z.string().max(45, 'Too long').min(1, 'Required'),
        dateOfBirth: z.string().min(1, 'Required'),
        phoneNumber: z.string().min(1, 'Required').max(15, 'Too long'),
        email: z.string().email('Invalid email'),
        address: z.string().min(1, 'Required'),
        referralSource:z.string().max(45, 'Too long').min(1, 'Required'),
        companyName: z.string().max(45, 'Too long').min(1, 'Required'),
    });

    // Setting up react-hook-form with Zod validation
    const { register, handleSubmit, formState: { errors } } = useForm<CustomerType>({ resolver: zodResolver(schema) });

    // Function to handle form submission
    const onSubmit = async (data: CustomerType) => {
        try {
            const response = await axios.post('http://localhost:8080/api/customers', data);
            setDisabled(true);
            alert("Added new customer successfully");
            window.location.reload(); // reload the page to reset form
        } catch (err) {
            console.error('Error adding customer:', err);
            alert('Error adding customer.');
        }
    };

    return (
        <div className="grid place-items-center">
            <div className="p-12 bg-white">
                <h1 className="text-xl font-semibold">Add Customer</h1>
                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* First Name */}
                    <div className="flex justify-between gap-3">
                        <span className="w-1/2">
                            <label htmlFor="firstName" className="block text-xs font-semibold text-gray-600 uppercase">First Name</label>
                            <input id="firstName" type="text" placeholder="John" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 ${errors.firstName ? "border-red-500" : ""}`} {...register('firstName', { required: true })} />
                            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                        </span>
                        <span className="w-1/2">
                            <label htmlFor="lastName" className="block text-xs font-semibold text-gray-600 uppercase">Last Name</label>
                            <input id="lastName" type="text" placeholder="Doe" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 ${errors.lastName ? "border-red-500" : ""}`} {...register('lastName', { required: true })} />
                            {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
                        </span>
                    </div>

                    {/* Date of Birth */}
                    <label htmlFor="dateOfBirth" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Date of Birth</label>
                    <input id="dateOfBirth" type="date" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 ${errors.dateOfBirth ? "border-red-500" : ""}`} {...register('dateOfBirth', { required: true })} />
                    {errors.dateOfBirth && <span className="text-red-500 text-xs">{errors.dateOfBirth.message}</span>}

                    {/* Phone Number */}
                    <label htmlFor="phoneNumber" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Phone Number</label>
                    <input id="phoneNumber" type="text" placeholder="1234567890" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 ${errors.phoneNumber ? "border-red-500" : ""}`} {...register('phoneNumber', { required: true })} />
                    {errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber.message}</span>}

                    {/* Email */}
                    <label htmlFor="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Email</label>
                    <input id="email" type="email" placeholder="john.doe@example.com" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 ${errors.email ? "border-red-500" : ""}`} {...register('email', { required: true })} />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}

                    {/* Address */}
                    <label htmlFor="address" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Address</label>
                    <input id="address" type="text" placeholder="123 Main St" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 ${errors.address ? "border-red-500" : ""}`} {...register('address', { required: true })} />
                    {errors.address && <span className="text-red-500 text-xs">{errors.address.message}</span>}

                    {/* referralSource */}
                    <label htmlFor="referralSource" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">ReferralSource</label>
                    <input id="referralSource" type="text" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 ${errors.referralSource ? "border-red-500" : ""}`} {...register('referralSource', { required: true })} />
                    {errors.referralSource && <span className="text-red-500 text-xs">{errors.referralSource.message}</span>}

                    {/* referralSource */}
                    <label htmlFor="companyName" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">CompanyName</label>
                    <input id="companyName" type="text" className={`block w-full p-3 mt-2 text-gray-700 bg-gray-200 ${errors.companyName ? "border-red-500" : ""}`} {...register('companyName', { required: true })} />
                    {errors.companyName && <span className="text-red-500 text-xs">{errors.companyName.message}</span>}

                    {/* Submit Button */}
                    <button type="submit" disabled={disabled} className="w-full py-3 mt-6 text-white bg-gray-800 uppercase shadow-lg focus:outline-none hover:bg-gray-400 hover:shadow-none">
                        Add Customer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCustomer;
