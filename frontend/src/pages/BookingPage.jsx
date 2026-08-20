import { useState } from 'react';

function BookingPage() {
  // State 1: holds all form field values together
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    date: '',
    timeSlot: '',
  });

  // State 2: tracks the currently selected doctor separately
  // (used meaningfully to show a live confirmation message)
  const [selectedDoctor, setSelectedDoctor] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'doctorName') {
      setSelectedDoctor(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert(`Appointment request sent for ${formData.patientName} with ${formData.doctorName}`);
  };

  return (
    <div className="page">
      <h1>Book an Appointment</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div>
          <label>Patient Name: </label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Doctor Name: </label>
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date: </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Time Slot: </label>
          <input
            type="text"
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            placeholder="e.g. 10:00 AM"
            required
          />
        </div>
        <button type="submit">Book Appointment</button>
      </form>

      {formData.patientName && (
        <p className="live-preview">
          Booking for: <strong>{formData.patientName}</strong>
        </p>
      )}

      {selectedDoctor && (
        <p className="live-preview">
          Selected Doctor: <strong>{selectedDoctor}</strong>
        </p>
      )}
    </div>
  );
}

export default BookingPage;