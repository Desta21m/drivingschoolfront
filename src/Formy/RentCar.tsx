import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RentCar = () => {
    const [vehicleId, setVehicleId] = useState<number | null>(null);
    const [selectedVehicle, setSelectedVehicle] = useState<any | null>(null); // Store the selected vehicle
    const [rentalStartDate, setRentalStartDate] = useState<string>('');
    const [rentalEndDate, setRentalEndDate] = useState<string>('');
    const [selectedRenter, setSelectedRenter] = useState<any | null>(null); // Store the selected renter
    const [rentableVehicles, setRentableVehicles] = useState<any[]>([]);

    const navigate = useNavigate();

    // Load selected renter from localStorage
    useEffect(() => {
        // Load selected renter
        const renterData = localStorage.getItem('selectedRenter');
        if (renterData) {
            setSelectedRenter(JSON.parse(renterData));
        }
    
        // Load selected vehicle
        const savedVehicleId = localStorage.getItem('selectedVehicleId');
        const savedVehicle = localStorage.getItem('selectedVehicle');
        if (savedVehicleId) {
            setVehicleId(parseInt(savedVehicleId, 10));
        }
        if (savedVehicle) {
            setSelectedVehicle(JSON.parse(savedVehicle));
        }
    }, []);
    

    // Fetch rentable vehicles from the backend
    useEffect(() => {
        axios.get('http://localhost:8080/api/vehicles/rentables')
            .then(response => setRentableVehicles(response.data))
            .catch(error => console.error('Error fetching vehicles:', error));
    }, []);

    const handleVehicleSelect = (vehicleId: string) => {
        console.log('Raw selected value:', vehicleId); // Log raw input
        const parsedVehicleId = parseInt(vehicleId, 10);
        if (!isNaN(parsedVehicleId)) {
            console.log('Parsed vehicle ID:', parsedVehicleId); // Log parsed value
            setVehicleId(parsedVehicleId);
            const vehicle = rentableVehicles.find(v => v.vehicleId === parsedVehicleId);
            setSelectedVehicle(vehicle);
            console.log('Selected vehicle:', vehicle); // Log selected vehicle object
        } else {
            console.log('Invalid vehicle ID:', vehicleId); // Log invalid cases
            setVehicleId(null);
            setSelectedVehicle(null);
        }
    };
    
    

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Construct the payload
        const rentalDetails = {
            customer: selectedRenter?.category === 'customer' ? selectedRenter.id : null,
            studId: selectedRenter?.category === 'student' ? selectedRenter.id : null,
            lectId: selectedRenter?.category === 'instructor' ? selectedRenter.id : null,
            vihecleId: vehicleId, // Corrected to match DTO
            rentalStartDate,
            rentalEndDate,
        };

        axios.post('http://localhost:8080/api/rented-cars', rentalDetails)
            .then(() => alert('Rental created successfully!'))
            .catch(error => alert('Error creating rental: ' + error.message));
            
            navigate('/RentCar');

    };

    const navigateToUserSelection = () => {
        if (vehicleId) {
            localStorage.setItem('selectedVehicleId', vehicleId.toString());
        }
        if (selectedVehicle) {
            localStorage.setItem('selectedVehicle', JSON.stringify(selectedVehicle));
        }
        navigate('/user-selection');
    };
    

    return (
        <div className="grid place-items-center p-6">
            <div className="p-12 bg-white shadow-lg rounded-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4">Rent a Car</h2>
                <form onSubmit={handleSubmit}>
                    {/* Select Vehicle */}
                    <div className="mb-4">
                        <label htmlFor="vehicle" className="block text-xs font-semibold text-gray-600 uppercase mb-1">
                            {selectedVehicle
                                ? `Selected Vehicle: ${selectedVehicle.make} ${selectedVehicle.model} (ID: ${selectedVehicle.id})`
                                : 'Select Vehicle'}
                        </label>
                        <select
                            id="vehicle"
                            value={vehicleId ?? ''}
                            onChange={e => handleVehicleSelect(e.target.value)}
                            className="block w-full p-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            <option value="">Select Vehicle</option>
                            {rentableVehicles.map(vehicle => (
                                <option key={vehicle.vehicleId} value={vehicle.vehicleId}>
                                    {vehicle.make} {vehicle.model}
                                </option>
                            ))}
                        </select>


                    </div>

                    {/* Select Renter */}
                    <div className="mb-4">
                        <label htmlFor="renter" className="block text-xs font-semibold text-gray-600 uppercase mb-1">Select Renter</label>
                        <button
                            type="button"
                            onClick={navigateToUserSelection}
                            className="w-full py-3 text-white bg-gray-800 rounded-md focus:outline-none hover:bg-gray-700"
                        >
                            {selectedRenter
                                ? `Renter: ${selectedRenter.firstName} ${selectedRenter.lastName}`
                                : 'Select Renter'}
                        </button>
                    </div>

                    {/* Rental Dates */}
                    <div className="mb-4">
                        <label htmlFor="rentalStartDate" className="block text-xs font-semibold text-gray-600 uppercase mb-1">Rental Start Date</label>
                        <input
                            id="rentalStartDate"
                            type="datetime-local"
                            value={rentalStartDate}
                            onChange={e => setRentalStartDate(e.target.value)}
                            className="block w-full p-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="rentalEndDate" className="block text-xs font-semibold text-gray-600 uppercase mb-1">Rental End Date</label>
                        <input
                            id="rentalEndDate"
                            type="datetime-local"
                            value={rentalEndDate}
                            onChange={e => setRentalEndDate(e.target.value)}
                            className="block w-full p-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-gray-800 rounded-md focus:outline-none hover:bg-gray-700"
                    >
                        Rent Vehicle
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RentCar;
