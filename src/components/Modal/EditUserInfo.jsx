import axios from "axios";
import { useState } from "react";
import { baseApiUrl } from "../../api/api";

const EditUserModal = ({ user, onClose, onUpdateUser }) => {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Simulate updating the user with a mock API request
      const response = await axios.put(`${baseApiUrl}/users/${user.id}`, {
        first_name: firstName,
        last_name: lastName,
        email,
      });

      // Since it's a mock API, manually create the updated user object
      const updatedUser = {
        ...user,
        first_name: firstName,
        last_name: lastName,
        email: email,
      };

      onUpdateUser(updatedUser);

      alert("User updated successfully");
      onClose();
    } catch (error) {
      setError("Failed to update user");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Edit User</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleUpdate}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded mt-4"
        >
          Update
        </button>
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded mt-4"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUserModal;
