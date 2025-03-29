// AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [pendingDoctors, setPendingDoctors] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/users').then((response) => setUsers(response.data));
    axios.get('/api/admin/appointments').then((response) => setAppointments(response.data));
    axios.get('/api/admin/pending-doctors').then((response) => setPendingDoctors(response.data));
  }, []);

  const approveDoctor = (doctorId) => {
    axios.post(`/api/admin/approve-doctor`, { doctorId })
      .then(() => alert('Doctor approved!'));
  };

  const rejectDoctor = (doctorId) => {
    axios.post(`/api/admin/reject-doctor`, { doctorId })
      .then(() => alert('Doctor rejected!'));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>

      <h2 className="mt-4 text-lg font-semibold">Pending Doctor Approvals</h2>
      <ul>
        {pendingDoctors.map((doctor) => (
          <li key={doctor.id} className="my-2">
            {doctor.name} - {doctor.specialization}
            <button
              className="ml-2 bg-green-500 text-white px-4 py-1 rounded"
              onClick={() => approveDoctor(doctor.id)}
            >
              Approve
            </button>
            <button
              className="ml-2 bg-red-500 text-white px-4 py-1 rounded"
              onClick={() => rejectDoctor(doctor.id)}
            >
              Reject
            </button>
          </li>
        ))}
      </ul>

      <h2 className="mt-4 text-lg font-semibold">All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="my-2">
            {user.name} - {user.role}
          </li>
        ))}
      </ul>

      <h2 className="mt-4 text-lg font-semibold">All Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id} className="my-2">
            {appointment.patientName} with {appointment.doctorName} on {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;