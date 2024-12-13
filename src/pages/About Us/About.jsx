import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 text-white min-h-screen">
      
      {/* Section: About Us */}
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We help businesses develop strategic competitive advantages by leveraging lasting human relationships.
      </motion.p>
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        We do so through our EmployWise and Smiles CRM software applications that we deliver in the Software-as-a-Service (SaaS) model.
      </motion.p>

      {/* Section: Our Vision */}
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Our Vision
      </motion.h2>
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        We passionately believe in the power of SaaS to enable millions of small and medium businesses across the world, especially in the emerging economies, to unravel automation that has otherwise been restricted only to large enterprises.
      </motion.p>

      {/* Section: Our Mission */}
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our Mission
      </motion.h2>
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Our mission is to be a relationship management solutions provider, admired for its superior products and services, quality delivery systems, professional business practices, lasting client relationships, and the ability to attract and retain the best talent.
      </motion.p>

      {/* Section: Services */}
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Our Services
      </motion.h2>
      <motion.ul
        className="list-disc list-inside mb-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <li>EmployWise: A comprehensive employee lifecycle management solution.</li>
        <li>Smiles CRM: Integrated customer lifecycle management, including sales force automation and service help desks.</li>
      </motion.ul>

      {/* Section: Experience */}
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Our Experience
      </motion.h2>
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        With almost two decades of existence, we are working with small, medium, and large organizations spanning several industry verticals. We are pioneers of SaaS in India, having launched the first CRM solution in 2001 when it was still called the ASP (Application Service Provider) model.
      </motion.p>

      {/* Section: Follow Us */}
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Follow Us
      </motion.h2>
      <motion.p
        className="text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        Follow us on <a href="https://www.employwise.com/" className="text-blue-500 hover:underline" target='_blank'>@EmployWise</a> Visite For More Details Of Our Services
      </motion.p>
    </div>
  );
};

export default About;
