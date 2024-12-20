import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil data lama dari Local Storage
    const existingReminders = JSON.parse(localStorage.getItem('reminders')) || [];

    // Tambahkan data baru ke array lama
    const newReminder = { ...formData, id: Date.now().toString() }; // Tambahkan ID unik
    const updatedReminders = [...existingReminders, newReminder];

    // Simpan data ke Local Storage
    localStorage.setItem('reminders', JSON.stringify(updatedReminders));

    // Reset form dan navigasikan ke halaman utama
    setFormData({ title: '', description: '', date: '', location: '' });
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Reminder</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-lg font-semibold text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter title"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-lg font-semibold text-gray-700">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div>
            <label htmlFor="date" className="block text-lg font-semibold text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-lg font-semibold text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter location"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
