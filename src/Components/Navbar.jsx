import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar fixed-top">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <span className="brand-name">Be Real Estates</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/home" className="nav-item">HomePage</Link></li>
        <li><Link to="/aboutus" className="nav-item">About Us</Link></li>
        <li><Link to="/blogs" className="nav-item">Blogs</Link></li>
        <li><Link to="/agentinfo" className="nav-item">Agent Info</Link></li>
        <li><Link to="/sellerinfo" className="nav-item">Seller Info</Link></li>
        <li><Link to="/contactus" className="nav-item">Contact Us</Link></li>

        <NavDropdown title="Properties" id="nav-dropdown">
          <NavDropdown.Item as={Link} to="/properties/flats">Flats</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/properties/plots">Plots</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/properties/furnishedflats">Furnished Flats</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/properties/rowhouses">Row Houses</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/properties/ourservices">Our Services</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/properties/reviews">Reviews</NavDropdown.Item>

          <NavDropdown.Divider />
        </NavDropdown>
      </ul>

      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>☰</button>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/home" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/aboutus" onClick={() => setIsOpen(false)}>About Us</Link></li>
          <li><Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link></li>
          <li><Link to="/contactus" onClick={() => setIsOpen(false)}>Contact Us</Link></li>

          <li className="dropdown">
            <button className="dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
              Properties ▼
            </button>
            {dropdownOpen && (
              <ul className="dropdown-content">
                <li><Link to="/properties/flats" onClick={() => setIsOpen(false)}>Flats</Link></li>
                <li><Link to="/properties/plots" onClick={() => setIsOpen(false)}>Plots</Link></li>
                <li><Link to="/properties/rowhouses" onClick={() => setIsOpen(false)}>Row Houses</Link></li>
                <li><Link to="/properties/furnishedflats" onClick={() => setIsOpen(false)}>Furnished Flats</Link></li>
                <li><Link to="/properties/ourservices" onClick={() => setIsOpen(false)}>Our Services</Link></li>
                <li><Link to="/properties/reviews" onClick={() => setIsOpen(false)}>Reviews</Link></li>

              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
