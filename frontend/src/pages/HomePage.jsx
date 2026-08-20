import AppointmentCard from '../components/AppointmentCard';

const sampleAppointments = [
  {
    patientName: 'Ravi Patel',
    doctorName: 'Dr. Neha Shah',
    date: '2026-08-25',
    timeSlot: '10:00 AM',
    status: 'confirmed',
  },
  {
    patientName: 'Anjali Mehta',
    doctorName: 'Dr. Karan Desai',
    date: '2026-08-26',
    timeSlot: '11:30 AM',
    status: 'pending',
  },
  {
    patientName: 'Sameer Joshi',
    doctorName: 'Dr. Neha Shah',
    date: '2026-08-27',
    timeSlot: '2:00 PM',
    status: 'cancelled',
  },
];

function HomePage() {
  return (
    <div className="page">
      <h1>MedCare Plus</h1>
      <p>Welcome to the Hospital Appointment System.</p>
      <h2>Sample Appointments</h2>
      <div className="card-grid">
        {sampleAppointments.map((appt, index) => (
          <AppointmentCard
            key={index}
            patientName={appt.patientName}
            doctorName={appt.doctorName}
            date={appt.date}
            timeSlot={appt.timeSlot}
            status={appt.status}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;