import React, { useState, useEffect } from 'react';
import Popup from '../../components/Popup';
import AddCustomer from '../../Formy/AddCustomer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/customers');
        setCustomers(response.data);
        console.log(response);
      } catch (err) {
        console.error('Error fetching customers:', err);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <section className="min-h-screen bg-slate-200 text-center font-sans">
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-300">
            <ul className="space-y-3">
              <li>
                <Link
                  to="/Customers"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Customers</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="relative flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Customers</h1>
            <Popup buttonText="Add Customer">
              <AddCustomer />
            </Popup>
          </div>

          <div className="mt-6 bg-white border border-gray-300 rounded-lg p-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">First Name</th>
                    <th className="px-6 py-3">Last Name</th>
                    <th className="px-6 py-3">Date of Birth</th>
                    <th className="px-6 py-3">Phone Number</th>
                    <th className="px-6 py-3">Address</th>
                    <th className="px-6 py-3">Referral Source</th>
                    <th className="px-6 py-3">Company Name</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-100">
                      <td className="px-6 py-4 font-medium text-gray-900">{customer.email}</td>
                      <td className="px-6 py-4">{customer.firstName}</td>
                      <td className="px-6 py-4">{customer.lastName}</td>
                      <td className="px-6 py-4">{customer.dateOfBirth}</td>
                      <td className="px-6 py-4">{customer.phoneNumber}</td>
                      <td className="px-6 py-4">{customer.address}</td>
                      <td className="px-6 py-4">{customer.referralSource}</td>
                      <td className="px-6 py-4">{customer.companyName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;
