const Bio = ({ text }) => {
  return <p style={{ fontStyle: 'italic', color: '#990099' }}>{text}</p>;
};

const UserProfile = (props) => {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        backgroundColor: '#df8de2ff',
        maxWidth: '300px'
      }}
    >
      <h2 style={{ color: 'blue', fontSize: '1.5rem' }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <Bio text={props.bio} />
    </div>
  );
};

export default UserProfile;
