import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";
import {
  fetchUsers,
  removeUser,
  updateUser,
} from "../../store/slice/usersSlice";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditUserModal from "../../components/Modal/EditUserInfo";
import { RotatingLines } from "react-loader-spinner";

const UsersList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error, totalPages } = useSelector(
    (state) => state.users
  );
  const searchQuery = useSelector((state) => state.search.query);

  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [page, dispatch, navigate]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await dispatch(removeUser(id));
      toast.success("User deleted successfully!");
    }
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const handleUserUpdate = async (updatedUser) => {
    await dispatch(updateUser(updatedUser));
    closeModal();
    toast.success("User updated successfully!");
  };

  // Filter users based on the search query
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return (
      fullName.includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      {loading && (
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-lg font-bold mb-1">
                {user.first_name} {user.last_name}
              </h3>
              <p className="text-gray-500 mb-4">{user.email}</p>

              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(user)}
                  className="text-blue-500 text-3xl px-4 py-2 rounded-lg hover:text-blue-800"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 text-3xl px-4 py-2 rounded-lg hover:text-red-800"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md mx-5">
            <EditUserModal
              user={selectedUser}
              onClose={closeModal}
              onUpdateUser={handleUserUpdate}
            />
          </div>
        </div>
      )}

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default UsersList;
