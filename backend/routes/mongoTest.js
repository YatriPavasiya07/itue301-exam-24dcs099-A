const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
const Appointment = require('../models/Appointment');

// Demonstrates a successful insert
router.post('/seed', async (req, res, next) => {
  try {
    const doctor = await Doctor.create({
      name: 'Dr. Neha Shah',
      email: 'neha.shah@medcare.com',
      specialisation: 'Cardiology',
    });

    const patient = await Patient.create({
      name: 'Ravi Patel',
      email: 'ravi.patel@example.com',
      phone: '9876543210',
      bloodGroup: 'B+',
      age: 34,
    });

    const appointment = await Appointment.create({
      patientId: patient._id,
      doctorId: doctor._id,
      date: '2026-08-25',
      timeSlot: '10:00 AM',
      reason: 'Routine checkup',
    });

    res.status(201).json({ doctor, patient, appointment });
  } catch (err) {
    err.statusCode = 400;
    next(err);
  }
});

// Demonstrates a validation failure (invalid blood group)
router.post('/validation-fail', async (req, res, next) => {
  try {
    const patient = await Patient.create({
      name: 'Invalid Patient',
      email: 'invalid@example.com',
      bloodGroup: 'Z+', // not in enum - triggers validation error
      age: 25,
    });
    res.status(201).json(patient);
  } catch (err) {
    err.statusCode = 400;
    err.message = 'Validation failed: ' + Object.values(err.errors || {}).map(e => e.message).join(', ');
    next(err);
  }
});

module.exports = router;