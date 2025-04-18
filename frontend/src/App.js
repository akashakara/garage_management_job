import React, { useState, useEffect } from 'react';
import JobCardForm from './components/JobCardForm';
import JobCardList from './components/JobCardList';

function App() {
  const [jobCards, setJobCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/jobcards')
      .then(response => response.json())
      .then(data => setJobCards(data))
      .catch(err => console.error('Error fetching job cards:', err));
  }, []);

  const addJobCard = (newCard) => {
    fetch('http://localhost:8080/jobcards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCard)
    })
      .then(response => response.json())
      .then(savedCard => {
        setJobCards(prevCards => [...prevCards, savedCard]);
      })
      .catch(err => console.error('Error adding job card:', err));
  };

  return (
    <div style={{ margin: '2rem' }}>
      <h1>Garage Job Card Management</h1>
      <JobCardForm onAdd={addJobCard} />
      <hr />
      <JobCardList jobCards={jobCards} />
    </div>
  );
}

export default App;