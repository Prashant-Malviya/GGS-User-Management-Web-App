import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 py-12 mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <motion.header
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl lg:text-4xl md:text-4xl font-extrabold mb-4 bg-gradient-to-br from-amber-600 to-purple-400 bg-clip-text text-transparent">
            User Management Application
          </h1>
          <p className="text-xl text-gray-600">
            By <span className='bg-gradient-to-br from-blue-600 to-amber-400 bg-clip-text text-transparent font-bold'>EmployWise</span> integrated with the Reqres API for user management.
          </p>
        </motion.header>

        {/* Project Overview Section */}
        <section className="mb-12">
          <motion.h2
            className="text-3xl font-semibold mb-6 text-gray-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Project Overview
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            This project is a full-fledged User Management System where users can authenticate, view, edit, and delete user details fetched from the Reqres API. The app showcases essential frontend skills, including API handling, form management, and user experience considerations.
          </motion.p>
        </section>

        {/* Key Features Section */}
        <section className="mb-12">
          <motion.h2
            className="text-3xl font-semibold mb-6 text-gray-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Key Features
          </motion.h2>
          <motion.ul
            className="space-y-4 list-disc list-inside text-gray-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <li><strong>User Authentication</strong>: Users can log in with credentials verified by the Reqres API.</li>
            <li><strong>Paginated User List</strong>: Displays users fetched from the API with pagination support.</li>
            <li><strong>Edit User Details</strong>: Users can manually edit user information and see real-time updates on the UI.</li>
            <li><strong>Delete User</strong>: Allows users to remove any user from the list, reflecting changes in the UI.</li>
            <li><strong>Search User</strong>: Allows users to search for any user in the list.</li>
          </motion.ul>
        </section>

        {/* Technology Stack Section */}
        <section className="mb-12">
          <motion.h2
            className="text-3xl font-semibold mb-6 text-gray-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technology Stack
          </motion.h2>
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none text-gray-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <li><strong>Frontend:</strong> React, Vite, Tailwind CSS,React-BootStrap</li>
            <li><strong>Backend:</strong> Reqres API (Mock API)</li>
            <li><strong>State Management:</strong> Redux Toolkit</li>
            <li><strong>Animations:</strong> Framer Motion</li>
            <li><strong>Http Request:</strong> Axios</li>
          </motion.ul>
        </section>

        {/* Redirect Buttons */}
        <section className="text-center mb-12">
          <motion.button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition-colors mr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            onClick={() => navigate('/user-list')} 
          >
            Go to User List
          </motion.button>
          <motion.a
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition-colors no-underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            href="https://reqres.in" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Reqres API
          </motion.a>
        </section>

        {/* Footer Section */}
        <footer className="border-t pt-6 text-center">
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Submitted by: <strong>Prashant Malviya</strong>
          </motion.p>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Submitted to: <strong>Global Groupware Solutions Limited</strong>
          </motion.p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
