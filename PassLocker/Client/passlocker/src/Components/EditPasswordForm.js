import React, { useState, useEffect } from 'react';
import API from '../api';

const EditPasswordForm = ({ currentPassword, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState(currentPassword);

  useEffect(() => {
    setFormData(currentPassword);
  }, [currentPassword]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.put(`/edit/${formData._id}`, formData);
      onUpdate(response.data);
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Password</h2>
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
      <button type="submit">Update</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditPasswordForm;
