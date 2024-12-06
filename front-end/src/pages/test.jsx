import React from 'react';
import './test.css';

// Fake User Data
const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { id: 3, name: 'Michael Johnson', email: 'michael.johnson@example.com', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { id: 5, name: 'Chris Lee', email: 'chris.lee@example.com', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { id: 6, name: 'Sara Brown', email: 'sara.brown@example.com', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
];

const Test = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-6">User List</h2>
      <div className="overflow-y-auto h-[450px] snap-y snap-mandatory scrollbar-hide">
        <div className="flex flex-col space-y-4 ">
          {users.map((user) => (
            <div
              key={user.id}
              className="user-card flex-none p-4 bg-red-600 rounded-lg shadow-md snap-start transition-transform duration-300"
            >
              {/* Avatar */}
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full object-cover mx-auto"
              />
              <div className="text-center mt-4">
                {/* User Name */}
                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                {/* User Email */}
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
