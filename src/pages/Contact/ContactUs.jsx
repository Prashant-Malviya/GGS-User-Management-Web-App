import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-white min-h-screen min-w-screen">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        For more information or inquiries, feel free to reach out through the following channels:
      </motion.p>
      <motion.ul
        className="list-none mb-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <li className="mb-2">
          <strong>Email:</strong> <a href="mailto:prashantmalviya272002@gmail.com" className="text-blue-400 hover:underline">prashantmalviyaofficial@gmail.com</a>
        </li>
        <li className="mb-2">
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/prashant-malviya-57270b1b6/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/prashant-malviya-57270b1b6</a>
        </li>
        <li className="mb-2">
          <strong>GitHub:</strong> <a href="https://github.com/Prashant-Malviya" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/Prashant-Malviya</a>
        </li>
        <li className="mb-2">
          <strong>Resume:</strong> <a href="https://drive.google.com/file/d/1EmKPBsjuDb3gLhKDraSuWNjpEcnyHbib/view?usp=sharing" download className="text-blue-400 hover:underline" target="_blank">Download Resume</a>
        </li>
      </motion.ul>
    </div>
  );
};

export default ContactUs;