import React, { useState } from 'react';
import API from '../api';

const AddPasswordForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    website: '',
    url: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/add', formData);
      onAdd(response.data);
      setFormData({ website: '', url: '', username: '', password: '' });
    } catch (error) {
      console.error('Error adding password:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Password</h2>
      <input
        type="text"
        name="website"
        placeholder="Website"
        value={formData.website}
        onChange={handleChange}
      />
      <input
        type="text"
        name="url"
        placeholder="URL"
        value={formData.url}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPasswordForm;
