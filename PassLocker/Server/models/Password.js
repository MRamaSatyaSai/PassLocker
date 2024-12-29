const mongoose = require('mongoose');

// Define the Password schema
const passwordSchema = new mongoose.Schema({
  website: {
    type: String,
    required: true, // Website name is required
  },
  url: {
    type: String,
    required: true, // URL is required
  },
  username: {
    type: String,
    required: true, // Username is required
  },
  password: {
    type: String,
    required: true, // Password is required
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// Create a model based on the schema
const Password = mongoose.model('Password', passwordSchema);

module.exports = Password; // Export the model to use in routes
