"use client"
import { useState } from 'react';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [clickedComponent, setClickedComponent] = useState('');

  const handleComponentClick = (name) => {
    setClickedComponent(name);
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/submit-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, clickedComponent }),
    });
    if (res.ok) {
      alert('Email submitted!');
      setShowForm(false);
      setEmail('');
    } else {
      alert('Submission failed');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Click Any Component</h1>

      <div onClick={() => handleComponentClick('Component A')} style={boxStyle}>Component A</div>
      <div onClick={() => handleComponentClick('Component B')} style={boxStyle}>Component B</div>
      <div onClick={() => handleComponentClick('Component C')} style={boxStyle}>Component C</div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <label>
            Enter your email:
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </label>
          <button type="submit" style={{ marginLeft: '10px' }}>Submit</button>
        </form>
      )}
    </div>
  );
}

const boxStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  margin: '10px 0',
  cursor: 'pointer',
  background: '#f0f0f0',
};
