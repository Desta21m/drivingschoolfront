import React, { useState, useEffect } from 'react';
import Popup from '../../components/Popup';
import RentCar from '../../Formy/RentCar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CarRents = () => {
  const [carRents, setCarRents] = useState([]);

  useEffect(() => {
    const fetchCarRents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/rented-cars');
        setCarRents(response.data);
        console.log(response);
      } catch (err) {
        console.error('Error fetching car rents:', err);
      }
    };

    fetchCarRents();
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
                  to="/CarRents"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Car Rentals</span>
                </Link>
              </li>
              {/* Add additional links here if needed */}
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="relative flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Car Rentals</h1>
            <Popup buttonText="Add Car Rent">
              <RentCar />
            </Popup>
          </div>

          <div className="mt-6 bg-white border border-gray-300 rounded-lg p-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Customer Name</th>
                    <th className="px-6 py-3">Vehicle ID</th>
                    <th className="px-6 py-3">Rental Start Date</th>
                    <th className="px-6 py-3">Rental End Date</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {carRents.map((rent, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-100">
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {rent.renter.firstName} {rent.renter.lastName}
                      </td>
                      <td className="px-6 py-4">{rent.vehicle.vehicleId}</td>
                      <td className="px-6 py-4">{rent.rentalStartDate}</td>
                      <td className="px-6 py-4">{rent.rentalEndDate}</td>
                      <td className="px-6 py-4">{rent.rentalPrice}</td>
                      <td className="px-6 py-4">{rent.isActive ? 'Active' : 'Completed'}</td>
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

export default CarRents;
