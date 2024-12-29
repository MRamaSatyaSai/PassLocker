import React, { useState } from 'react';
import PasswordList from './Components/PasswordList';
import AddPasswordForm from './Components/AddPasswordForm';
import EditPasswordForm from './Components/EditPasswordForm';
import './Style.css';

const App = () => {
  const [editingPassword, setEditingPassword] = useState(null);

  const handleAdd = () => {
    window.location.reload();
  };

  const handleEdit = (password) => {
    setEditingPassword(password);
  };

  const handleUpdate = () => {
    setEditingPassword(null);
    window.location.reload();
  };

  const handleDelete = async (id) => {
    // Add delete logic
    window.location.reload();
  };

  return (
    <div>
      <h1>Password Locker</h1>
      {editingPassword ? (
        <EditPasswordForm
          currentPassword={editingPassword}
          onUpdate={handleUpdate}
          onCancel={() => setEditingPassword(null)}
        />
      ) : (
        <AddPasswordForm onAdd={handleAdd} />
      )}
      <PasswordList onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;