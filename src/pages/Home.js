import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [reminders, setReminders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedReminders = JSON.parse(localStorage.getItem('reminders')) || [];
    setReminders(storedReminders);
  }, []);

  const handleDelete = (id) => {
    const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(updatedReminders);
    localStorage.setItem('reminders', JSON.stringify(updatedReminders));
  };

  return (
    <div className="space-y-10">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">Manage Your Invitations</h1>
        <p className="text-lg text-gray-500 mt-4">Stay organized and never miss an event again!</p>
        <Link to="/edit/new" className="mt-6 inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded shadow-lg hover:bg-blue-700 transition">Create New Reminder</Link>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Reminders</h2>
        {reminders.length === 0 ? (
          <p className="text-gray-500 text-lg">No reminders yet. Create one above!</p>
        ) : (
          <ul className="space-y-4">
            {reminders.map((reminder) => (
              <li key={reminder.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{reminder.title}</h3>
                  <p className="text-gray-600">{reminder.description}</p>
                  <p className="text-gray-500 text-sm">{reminder.date}</p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => navigate(`/edit/${reminder.id}`)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(reminder.id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;