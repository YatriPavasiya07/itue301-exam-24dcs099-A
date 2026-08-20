const express = require('express');
const router = express.Router();

// In-memory store for now (Task 3 scope)
let appointments = [];

// GET /api/v1/appointments
router.get('/', (req, res) => {
  res.status(200).json(appointments);
});

// POST /api/v1/appointments
router.post('/', (req, res, next) => {
  try {
    const { patientId, doctorId, date, timeSlot, status, reason } = req.body;

    if (!patientId || !doctorId || !date || !timeSlot) {
      const error = new Error('patientId, doctorId, date and timeSlot are required');
      error.statusCode = 400;
      throw error;
    }

    const newAppointment = {
      id: Date.now().toString(),
      patientId,
      doctorId,
      date,
      timeSlot,
      status: status || 'pending',
      reason: reason || '',
    };

    appointments.push(newAppointment);
    res.status(201).json(newAppointment);
  } catch (err) {
    next(err);
  }
});

module.exports = router;