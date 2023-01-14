const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware.js');
const connectDB = require('./config/db');

//Connect to database
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(201).json({ message: 'Welcome to the Support Desk Api' });
});

//Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
