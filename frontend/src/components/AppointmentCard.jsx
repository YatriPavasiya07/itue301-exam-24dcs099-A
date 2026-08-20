import './AppointmentCard.css';

function AppointmentCard({ patientName, doctorName, date, timeSlot, status }) {
  return (
    <div className={`appointment-card status-${status}`}>
      <h3>Appointment Details</h3>
      <p><strong>Patient:</strong> {patientName}</p>
      <p><strong>Doctor:</strong> {doctorName}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time Slot:</strong> {timeSlot}</p>
      <p>
        <strong>Status:</strong>{' '}
        <span className={`status-badge status-badge-${status}`}>
          {status}
        </span>
      </p>
    </div>
  );
}

export default AppointmentCard;