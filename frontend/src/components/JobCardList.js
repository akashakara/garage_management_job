import React from 'react';

export default function JobCardList({ jobCards }) {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      padding: '24px',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: '16px',
      color: '#333',
    },
    noDataText: {
      color: '#666',
      fontSize: '16px',
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      padding: '12px 16px',
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 500,
      color: '#555',
      backgroundColor: '#f3f4f6',
      borderBottom: '1px solid #e5e7eb',
    },
    td: {
      padding: '12px 16px',
      fontSize: '14px',
      color: '#333',
      borderTop: '1px solid #e5e7eb',
    },
    linkButton: {
      display: 'inline-block',
      padding: '6px 12px',
      fontSize: '14px',
      fontWeight: 500,
      color: '#fff',
      backgroundColor: '#4f46e5',
      borderRadius: '8px',
      textDecoration: 'none',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Existing Job Cards</h2>

      {jobCards.length === 0 ? (
        <p style={styles.noDataText}>No job cards available.</p>
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Vehicle Number</th>
                <th style={styles.th}>Service Type</th>
                <th style={styles.th}>Parts Used</th>
                <th style={styles.th}>Next Due Date</th>
                <th style={styles.th}>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {jobCards.map(card => (
                <tr key={card.id}>
                  <td style={styles.td}>{card.vehicleNumber}</td>
                  <td style={styles.td}>{card.serviceType}</td>
                  <td style={styles.td}>{card.partsUsed}</td>
                  <td style={styles.td}>{card.nextDueDate || '-'}</td>
                  <td style={styles.td}>
                    <a
                      href={`http://localhost:8080/jobcards/${card.id}/pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.linkButton}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#4338ca'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#4f46e5'}
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
