// UserSelectionPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Popup from '../components/Popup';  // Make sure the correct Popup component is imported
import AddStudent from './AddStudent';
import AddInstructor from './AddInstructor';
import AddCustomer from './AddCustomer';

const UserSelectionPage = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<string>('student');
  const [users, setUsers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch users based on selected category
  const fetchUsers = async (category: string) => {
    setIsLoading(true);
    try {
      let url = '';
      if (category === 'student') {
        url = 'http://localhost:8080/api/students'; // API endpoint for students
      } else if (category === 'instructor') {
        url = 'http://localhost:8080/api/instructors'; // API endpoint for instructors
      } else if (category === 'customer') {
        url = 'http://localhost:8080/api/customers'; // API endpoint for customers
      }

      const response = await axios.get(url);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger the fetch when category changes
  useEffect(() => {
    fetchUsers(selectedCategory);
  }, [selectedCategory]);

  // Filter the users based on the search query
  const filteredUsers = users.filter(user =>
    (`${user.firstName} ${user.lastName}`).toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUserSelect = (user: any) => {
    const renter = { ...user, category: selectedCategory };
    localStorage.setItem('selectedRenter', JSON.stringify(renter));
    navigate('/rent-car'); // Navigate to RentCar page
  };

  return (
    <div className="user-selection-container max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Select or Add a Renter</h2>

      {/* Buttons to select category with adjusted spacing */}
      <div className="category-buttons flex justify-center gap-8 mb-6">
        <button
          onClick={() => setSelectedCategory('student')}
          className="selection-button py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Student
        </button>
        <button
          onClick={() => setSelectedCategory('instructor')}
          className="selection-button py-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Instructor
        </button>
        <button
          onClick={() => setSelectedCategory('customer')}
          className="selection-button py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Customer
        </button>
      </div>

      {/* Search bar */}
      <div className="search-bar mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="search-input w-full p-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>

      {/* Add New User */}
      <div className="add-new-user mb-6 text-center">
        <Popup
          buttonText={`Add New ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
        >
          {selectedCategory === 'student' ? (
            <AddStudent />
          ) : selectedCategory === 'instructor' ? (
            <AddInstructor />
          ) : (
            <AddCustomer />
          )}
        </Popup>
      </div>

      {/* Users List */}
      <div className="users-list">
        {isLoading ? (
          <div>Loading...</div>
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div
              key={user.id}
              className="user-item mb-4 p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200"
              onClick={() => handleUserSelect(user)}
            >
              {`${user.firstName} ${user.lastName}`}
            </div>
          ))
        ) : (
          <div>No users found</div>
        )}
      </div>
    </div>
  );
};

export default UserSelectionPage;
