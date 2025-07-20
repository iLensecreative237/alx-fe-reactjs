import React, { useContext } from 'react';
import UserContext from './UserContext'; // adjust path if needed

const Bio = ({ text }) => {
  return <p style={{ fontStyle: 'italic', color: '#555' }}>{text}</p>;
};

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        backgroundColor: '#0ebb90ff',
        maxWidth: '300px'
      }}
    >
      <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{userData.name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold' }}>{userData.age}</span>
      </p>
      <Bio text={userData.bio} />
    </div>
  );
};

export default UserProfile;