// PatientDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('/api/doctors').then((response) => setDoctors(response.data));
    axios.get('/api/patient/appointments').then((response) => setAppointments(response.data));
  }, []);

  const bookAppointment = (doctorId) => {
    axios.post('/api/appointments', { doctorId })
      .then(() => alert('Appointment booked successfully!'));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Patient Dashboard</h1>

      <h2 className="mt-4 text-lg font-semibold">Available Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id} className="my-2">
            {doctor.name} - {doctor.specialization}
            <button
              className="ml-2 bg-blue-500 text-white px-4 py-1 rounded"
              onClick={() => bookAppointment(doctor.id)}
            >
              Book Appointment
            </button>
          </li>
        ))}
      </ul>

      <h2 className="mt-4 text-lg font-semibold">Your Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id} className="my-2">
            {appointment.doctorName} - {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientDashboard;