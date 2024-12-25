import React, { useEffect, useState } from 'react';
import Popup from '../../components/Popup';
import AddVehicle from '../../Formy/AddVehicle';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/vehicles/maintenance');
        setVehicles(response.data);
        console.log(response);
      } catch (err) {
        console.error('Error fetching vehicles:', err);
      }
    };

    fetchVehicles();
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
                  to="/Vehicles"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Vehicles</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Maintenance"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Maintenance</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Assigned"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Assigned</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Rented"
                  className="flex items-center p-2 text-base font-medium text-black rounded-lg hover:text-red-600 hover:bg-gray-100"
                >
                  <span className="ml-3">Rented</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="relative flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Maintenance Vehicles</h1>
            <Popup buttonText="Add Vehicle">
              <AddVehicle />
            </Popup>
          </div>

          <div className="mt-6 bg-white border border-gray-300 rounded-lg p-4">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                  <tr>
                    <th className="px-6 py-3">Color</th>
                    <th className="px-6 py-3">License Plate</th>
                    <th className="px-6 py-3">Maintenance Date</th>
                    <th className="px-6 py-3">Make</th>
                    <th className="px-6 py-3">Model</th>
                    <th className="px-6 py-3">Registration Date</th>
                    <th className="px-6 py-3">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicles.map((vehicle, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-100">
                      <td className="px-6 py-4 font-medium text-gray-900">{vehicle.color}</td>
                      <td className="px-6 py-4">{vehicle.licensePlate}</td>
                      <td className="px-6 py-4">{vehicle.maintenanceDate}</td>
                      <td className="px-6 py-4">{vehicle.make}</td>
                      <td className="px-6 py-4">{vehicle.model}</td>
                      <td className="px-6 py-4">{vehicle.registrationDate}</td>
                      <td className="px-6 py-4">{vehicle.year}</td>
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

export default Vehicles;
