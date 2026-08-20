import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-brand">MedCare Plus</h2>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/booking">Book Appointment</Link>
      </div>
    </nav>
  );
}

export default Navbar;