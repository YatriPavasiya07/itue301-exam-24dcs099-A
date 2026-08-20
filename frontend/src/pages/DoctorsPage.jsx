import { useState, useEffect } from 'react';

function DoctorsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/v1/doctors');
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) {
    return <div className="page"><p>Loading doctors...</p></div>;
  }

  if (error) {
    return <div className="page"><p style={{ color: 'red' }}>Error: {error}</p></div>;
  }

  return (
    <div className="page">
      <h1>Our Doctors</h1>
      <div className="card-grid">
        {data.map((doc) => (
          <div key={doc.id} className="appointment-card">
            <h3>{doc.name}</h3>
            <p><strong>Specialisation:</strong> {doc.specialisation}</p>
            <p><strong>Availability:</strong> {doc.available ? 'Available' : 'Not Available'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorsPage;