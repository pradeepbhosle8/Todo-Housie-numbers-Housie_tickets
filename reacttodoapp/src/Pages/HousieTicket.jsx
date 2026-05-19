import React, { useState } from 'react';

// --- Utility Functions for Ticket Generation ---

// Fisher-Yates Shuffle for true randomness
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Generates a single valid 3x9 Tambola Ticket
const generateSingleTicket = () => {
  // 1. Initialize a 3x9 grid with 0 (which represents an empty space)
  let ticket = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  // 2. Assign 5 random column positions for each of the 3 rows
  for (let r = 0; r < 3; r++) {
    const cols = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const shuffledCols = shuffleArray(cols);
    const selectedCols = shuffledCols.slice(0, 5); // Pick 5 slots per row

    selectedCols.forEach(c => {
      ticket[r][c] = 1; // Mark this slot to be filled with a number
    });
  }

  // 3. Define the standard Housie number ranges for each column
  const colRanges = [
    { min: 1, max: 9 },      // Col 1
    { min: 10, max: 19 },    // Col 2
    { min: 20, max: 29 },    // Col 3
    { min: 30, max: 39 },    // Col 4
    { min: 40, max: 49 },    // Col 5
    { min: 50, max: 59 },    // Col 6
    { min: 60, max: 69 },    // Col 7
    { min: 70, max: 79 },    // Col 8
    { min: 80, max: 90 },    // Col 9
  ];

  // 4. Populate the marked slots with random numbers and sort them vertically
  for (let c = 0; c < 9; c++) {
    // Find which rows in this column need a number
    let slotsToFill = [];
    for (let r = 0; r < 3; r++) {
      if (ticket[r][c] === 1) slotsToFill.push(r);
    }

    if (slotsToFill.length > 0) {
      // Create a pool of available numbers for this column
      let pool = [];
      for (let i = colRanges[c].min; i <= colRanges[c].max; i++) pool.push(i);
      
      // Pick the required amount of unique numbers
      const shuffledPool = shuffleArray(pool);
      let pickedNumbers = shuffledPool.slice(0, slotsToFill.length);
      
      // Numbers must be sorted vertically from top to bottom
      pickedNumbers.sort((a, b) => a - b); 

      // Place them in the ticket
      slotsToFill.forEach((rowIndex, idx) => {
        ticket[rowIndex][c] = pickedNumbers[idx];
      });
    }
  }

  return ticket;
};


// --- Main React Component ---

const HousieTicket = () => {
  const [tickets, setTickets] = useState([generateSingleTicket()]);
  const [markedNumbers, setMarkedNumbers] = useState([]);

  // Add a new ticket to the screen
  const addTicket = () => {
    setTickets([...tickets, generateSingleTicket()]);
  };

  // Toggle marking a number when clicked
  const toggleMark = (num) => {
    if (num === 0) return; // Ignore blank clicks
    
    if (markedNumbers.includes(num)) {
      setMarkedNumbers(markedNumbers.filter(n => n !== num));
    } else {
      setMarkedNumbers([...markedNumbers, num]);
    }
  };

  // Reset all marks and generate fresh tickets
  const resetGame = () => {
    if (window.confirm("Clear all tickets and marks?")) {
      setTickets([generateSingleTicket()]);
      setMarkedNumbers([]);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Housie Ticket Generator</h1>

      <div style={styles.controls}>
        <button onClick={addTicket} style={{ ...styles.button, ...styles.addBtn }}>
          + Generate New Ticket
        </button>
        <button onClick={resetGame} style={{ ...styles.button, ...styles.resetBtn }}>
          Reset All
        </button>
      </div>

      <p style={styles.instruction}>Tip: Click on the numbers to mark them off as they are drawn!</p>

      {/* Ticket List Container */}
      <div style={styles.ticketList}>
        {tickets.map((ticket, ticketIndex) => (
          <div key={ticketIndex} style={styles.ticketWrapper}>
            <div style={styles.ticketHeader}>Ticket #{ticketIndex + 1}</div>
            
            <div style={styles.ticketGrid}>
              {ticket.map((row, rowIndex) => 
                row.map((num, colIndex) => {
                  const isMarked = markedNumbers.includes(num);
                  const isBlank = num === 0;

                  return (
                    <div 
                      key={`${rowIndex}-${colIndex}`} 
                      onClick={() => toggleMark(num)}
                      style={{
                        ...styles.cell,
                        backgroundColor: isBlank ? '#dcdde1' : '#ffffff',
                        cursor: isBlank ? 'default' : 'pointer'
                      }}
                    >
                      {/* Only display numbers, ignore 0s */}
                      {!isBlank && (
                        <div style={{
                          ...styles.numberCircle,
                          backgroundColor: isMarked ? '#ff4757' : 'transparent',
                          color: isMarked ? '#ffffff' : '#2f3542',
                          borderColor: isMarked ? '#ff4757' : 'transparent'
                        }}>
                          {num}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Inline Styles ---
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f5f6fa',
    minHeight: '100vh',
  },
  title: {
    color: '#2f3542',
    marginBottom: '20px',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '10px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white',
    transition: 'opacity 0.2s',
  },
  addBtn: {
    backgroundColor: '#2ed573',
  },
  resetBtn: {
    backgroundColor: '#747d8c',
  },
  instruction: {
    color: '#57606f',
    fontStyle: 'italic',
    marginBottom: '30px',
  },
  ticketList: {
    // display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // gap: '40px',
    display: 'flex',
    /* flex-direction: column; */
    alignItems: 'center',
    gap: '30px',
  },
  ticketWrapper: {
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    display: 'inline-block',
    maxWidth: '100%',
    overflowX: 'auto', // helps fit on small mobile screens
  },
  ticketHeader: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#a4b0be',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '0.9rem',
  },
  ticketGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(9, minmax(40px, 1fr))',
    border: '2px solid #2f3542',
    backgroundColor: '#2f3542',
    gap: '2px', // creates the inner borders
  },
  cell: {
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.4rem',
    fontWeight: 'bold',
    userSelect: 'none', // prevents text selection when double clicking
  },
  numberCircle: {
    width: '38px',
    height: '38px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    transition: 'all 0.2s ease-in-out',
  }
};

export default HousieTicket;