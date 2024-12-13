import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store/slice/searchSlice";
import { logout } from "../../store/slice/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../images/Logo.svg";

function NavbarMenu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showLogout, setShowLogout] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Search
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(searchTerm));
    setIsExpanded(false);
  };

  // Logout
  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };

  // Handle Link Click
  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-blue-200 shadow-md fixed-top px-3"
      expanded={isExpanded}
    >
      <Container fluid>
        {/* Logo */}
        <Link to={"/home"} className="no-underline">
          <Navbar.Brand className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-28 h-10" />
          </Navbar.Brand>
        </Link>

        {/* Navbar Toggle for Small Screens */}
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setIsExpanded(!isExpanded)}
          className="border-none focus:outline-none"
        />

        <Navbar.Collapse id="navbarScroll">
          {/* Navigation Links */}
          <Nav className="flex flex-col lg:flex-row lg:items-center lg:space-x-5 mt-3 lg:mt-0 font-bold">
            <Link
              to="/home"
              className="no-underline text-gray-700 hover:text-blue-600 py-2 lg:py-0"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/user-list"
              className="no-underline text-gray-700 hover:text-blue-600 py-2 lg:py-0"
              onClick={handleLinkClick}
            >
              User List
            </Link>
            <Link
              to="/about"
              className="no-underline text-gray-700 hover:text-blue-600 py-2 lg:py-0"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="no-underline text-gray-700 hover:text-blue-600 py-2 lg:py-0"
              onClick={handleLinkClick}
            >
              Contact Me
            </Link>
          </Nav>

          {/* Search Bar */}
          <Form
            className="flex flex-col lg:flex-row items-center mt-3 lg:mt-0 lg:ml-auto"
            onSubmit={handleSearch}
          >
            <Form.Control
              type="search"
              placeholder="Search by name or instructor"
              className="w-full lg:w-auto mb-2 lg:mb-0 lg:mr-2"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              variant="outline-success"
              type="submit"
              className="w-full lg:w-auto"
            >
              Search
            </Button>
          </Form>

          {/* Profile Icon and Logout */}
          <div className="relative mt-3 lg:mt-0 lg:ml-4">
            <FaUserCircle
              size={32}
              className="text-gray-800 cursor-pointer"
              onClick={() => setShowLogout((prev) => !prev)}
            />
            {showLogout && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-2 z-10">
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={handleSignOut}
                  className="w-full"
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
