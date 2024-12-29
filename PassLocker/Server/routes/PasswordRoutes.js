const express = require('express');
const router = express.Router();
const Password = require('../models/Password'); // Import the Password model
// const verifyToken = require('../middleware/verifyToken');



// Route to get all passwords (protected)
// router.get('/', verifyToken, async (req, res) => {
//   try {
//     const passwords = await Password.find({ user: req.userId });
//     res.status(200).json(passwords);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to fetch passwords', details: err.message });
//   }
// });


// Route to add a new password
router.post('/add', async (req, res) => {
  try {
    const { website, url, username, password } = req.body;

    // Validation
    if (!website || !username || !password) {
      return res.status(400).json({ error: 'Website, username, and password are required' });
    }

    const newPassword = new Password({
      website,
      url,
      username,
      password,
    });

    await newPassword.save();
    res.status(201).json({ message: 'Password added successfully!', newPassword });
  } catch (err) {
    res.status(400).json({ error: 'Failed to add password', details: err.message });
  }
});

// Route to get all passwords
router.get('/', async (req, res) => {
  try {
    const passwords = await Password.find();
    res.status(200).json(passwords);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch passwords', details: err.message });
  }
});

// Route to edit an existing password
router.put('/edit/:id', async (req, res) => {
  try {
    const { website, url, username, password } = req.body;
    const { id } = req.params;

    const updatedPassword = await Password.findByIdAndUpdate(
      id,
      { website, url, username, password },
      { new: true }
    );

    if (!updatedPassword) {
      return res.status(404).json({ error: 'Password not found' });
    }

    res.status(200).json({ message: 'Password updated successfully!', updatedPassword });
  } catch (err) {
    res.status(400).json({ error: 'Failed to update password', details: err.message });
  }
});

// Route to delete a password
router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPassword = await Password.findByIdAndDelete(id);

    if (!deletedPassword) {
      return res.status(404).json({ error: 'Password not found' });
    }

    res.status(200).json({ message: 'Password deleted successfully!' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete password', details: err.message });
  }
});

module.exports = router;
