// DoctorDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [availability, setAvailability] = useState('');

  useEffect(() => {
    axios.get('/api/doctor/appointments').then((response) => setAppointments(response.data));
  }, []);

  const updateAvailability = () => {
    axios.post('/api/doctor/availability', { availability })
      .then(() => alert('Availability updated!'));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Doctor Dashboard</h1>

      <h2 className="mt-4 text-lg font-semibold">Set Availability</h2>
      <input
        type="text"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        placeholder="Enter availability (e.g., 9AM - 5PM)"
        className="border p-2 rounded"
      />
      <button
        className="ml-2 bg-green-500 text-white px-4 py-1 rounded"
        onClick={updateAvailability}
      >
        Update
      </button>

      <h2 className="mt-4 text-lg font-semibold">Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id} className="my-2">
            {appointment.patientName} - {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorDashboard;
