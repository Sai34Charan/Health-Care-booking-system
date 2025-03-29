import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientDashboard from './PatientDashboard';
import AdminDashboard from './AdminDashboard';
import DoctorDashboard from './DoctorDashboard';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/Patientdashboard" element={<PatientDashboard />} />
            <Route path="/AdminDashboard" element={<AdminDashboard/>} />
            <Route path="/DoctorDashboard" element={<DoctorDashboard/>} />
        </Routes>
    </Router>
);

export default App;
