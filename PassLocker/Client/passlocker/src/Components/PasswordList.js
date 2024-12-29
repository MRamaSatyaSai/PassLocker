import React, { useEffect, useState } from 'react';
import API from '../api';
import './PasswordList.css';

const PasswordList = ({ onEdit, onDelete }) => {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    fetchPasswords();
  }, []);

  const fetchPasswords = async () => {
    try {
      const response = await API.get('/');
      setPasswords(response.data);
    } catch (error) {
      console.error('Error fetching passwords:', error);
    }
  };

  // Handling the Delete operation
  const handleDelete = async (id) => {
    try {
      await API.delete(`/delete/${id}`);
      setPasswords(passwords.filter(password => password._id !== id)); // Update the UI
    } catch (error) {
      console.error('Error deleting password:', error);
    }
  };

  return (
    <div>
      <h2>Stored Passwords</h2>
      <div className="password-list">
        {passwords.map((password) => (
          <div key={password._id} className="password-item">
            <div className="info">
              <strong>{password.website}</strong> ({password.url})
              <div>Username: {password.username}</div>
              <div>Password: {password.password}</div>
            </div>
            <div className="actions">
              <button className="edit" onClick={() => onEdit(password)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(password._id)}>Delete</button> {/* Updated */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordList;
