import React from 'react';
import { useParams, Link } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const reminder = {
    id,
    title: "Sample Event",
    description: "This is a sample event description.",
    date: "2024-12-25",
    location: "Online",
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{reminder.title}</h1>
      <p className="mb-2">{reminder.description}</p>
      <p className="mb-2">Date: {reminder.date}</p>
      <p className="mb-2">Location: {reminder.location}</p>
      <Link to={`/edit/${reminder.id}`} className="btn btn-secondary mr-2">Edit</Link>
      <Link to="/" className="btn btn-danger">Delete</Link>
    </div>
  );
}

export default Detail;