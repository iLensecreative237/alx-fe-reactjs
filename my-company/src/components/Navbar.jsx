import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav 
     style={{ 
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#990099', 
        padding: '10px',  
        }}
    >
      <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
