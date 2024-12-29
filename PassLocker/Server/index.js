const express = require('express'); // Import Express
const mongoose = require('mongoose'); // Import Mongoose for MongoDB
const cors = require('cors'); // Import CORS to handle cross-origin requests

const app = express(); // Initialize Express

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// MongoDB Connection
mongoose
  .connect('mongodb+srv://backend:21221A0567@backend.yrhxo.mongodb.net/?retryWrites=true&w=majority&appName=Backend', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection failed:', err));
 
// Sample Test Route (For checking server functionality)
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Routes (Will add real routes later)
const passwordRoutes = require('./routes/PasswordRoutes'); // Import password routes
app.use('/api/passwords', passwordRoutes); // Use password routes

// Start the Server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
