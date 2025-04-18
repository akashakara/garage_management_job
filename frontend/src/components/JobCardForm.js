import React, { useState } from 'react';

export default function JobCardForm({ onAdd }) {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [serviceType, setServiceType] = useState('General Service');
  const [partsUsed, setPartsUsed] = useState('');
  const [nextDueDate, setNextDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ vehicleNumber, serviceType, partsUsed, nextDueDate });
    setVehicleNumber('');
    setServiceType('General Service');
    setPartsUsed('');
    setNextDueDate('');
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: '16px',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 calc(50% - 16px)',
    },
    fullWidthGroup: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 100%',
    },
    label: {
      marginBottom: '4px',
      fontSize: '14px',
      fontWeight: 500,
      color: '#555',
    },
    input: {
      padding: '8px 12px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      outline: 'none',
    },
    select: {
      padding: '8px 12px',
      fontSize: '14px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      outline: 'none',
      backgroundColor: '#fff',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      flex: '1 1 100%',
      marginTop: '8px',
    },
    button: {
      backgroundColor: '#4f46e5',
      color: '#fff',
      padding: '10px 24px',
      fontSize: '14px',
      fontWeight: 500,
      border: 'none',
      borderRadius: '24px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Job Card</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Vehicle Number</label>
          <input
            type="text"
            value={vehicleNumber}
            onChange={e => setVehicleNumber(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Service Type</label>
          <select
            value={serviceType}
            onChange={e => setServiceType(e.target.value)}
            style={styles.select}
          >
            <option value="General Service">General Service</option>
            <option value="Breakdown">Breakdown</option>
          </select>
        </div>

        <div style={styles.fullWidthGroup}>
          <label style={styles.label}>Parts Used</label>
          <input
            type="text"
            value={partsUsed}
            onChange={e => setPartsUsed(e.target.value)}
            placeholder="e.g. Oil Filter, Air Filter"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Next Service Due Date</label>
          <input
            type="date"
            value={nextDueDate}
            onChange={e => setNextDueDate(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>
            Add Job Card
          </button>
        </div>
      </form>
    </div>
  );
}
