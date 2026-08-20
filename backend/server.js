const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const requestLogger = require('./middleware/requestLogger');
const errorHandler = require('./middleware/errorHandler');
const doctorsRoute = require('./routes/doctors');
const appointmentsRoute = require('./routes/appointments');
const mongoTestRoute = require('./routes/mongoTest');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('Hospital Appointment System API is running');
});

app.use('/api/v1/doctors', doctorsRoute);
app.use('/api/v1/appointments', appointmentsRoute);
app.use('/api/v1/mongo-test', mongoTestRoute);

app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});