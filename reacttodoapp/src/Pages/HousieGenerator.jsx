import React,{useState} from 'react'




const HousieGenerator = () => {

 // Generate initial array of numbers 1 to 90
  const TOTAL_NUMBERS = 90;
  const initialPool = Array.from({ length: TOTAL_NUMBERS }, (_, i) => i + 1);

  // State Management
  const [availableNumbers, setAvailableNumbers] = useState(initialPool);
  const [drawnNumbers, setDrawnNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);

  // Function to draw a random number
  const drawNumber = () => {
    if (availableNumbers.length === 0) {
      alert("All numbers have been drawn! Game Over.");
      return;
    }

    // 1. Pick a random index from the available numbers
    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const drawnNum = availableNumbers[randomIndex];

    // 2. Set the current number
    setCurrentNumber(drawnNum);

    // 3. Add to drawn numbers list
    setDrawnNumbers([...drawnNumbers, drawnNum]);

    // 4. Remove from available numbers pool (prevents repetition)
    const newAvailableNumbers = availableNumbers.filter(
      (_, index) => index !== randomIndex
    );
    setAvailableNumbers(newAvailableNumbers);
  };

  // Function to reset the game
  const resetGame = () => {
    if (window.confirm("Are you sure you want to restart the game?")) {
      setAvailableNumbers(initialPool);
      setDrawnNumbers([]);
      setCurrentNumber(null);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Housie</h1>

      {/* Controls and Current Number Display */}
      <div style={styles.controlPanel}>
        <div style={styles.currentNumberBox}>
          <p style={styles.currentNumberText}>
            {currentNumber ? currentNumber : 'OK'}
          </p>
        </div>
        
        <div style={styles.buttons}>
          <button 
            onClick={drawNumber} 
            style={{...styles.button, ...styles.drawBtn}}
            disabled={availableNumbers.length === 0}
          >
            Draw Number
          </button>
          <button 
            onClick={resetGame} 
            style={{...styles.button, ...styles.resetBtn}}
          >
            Reset Game
          </button>
          {/* <button onClick={() => window.location.href = '/housie-tickets'}>Generate Tickets</button> */}
        </div>
        
        <p style={styles.stats}>
          Numbers Left: <strong>{availableNumbers.length}</strong> / 90
        </p>
      </div>

      {/* The 1-90 Board */}
      <div style={styles.board}>
        {Array.from({ length: TOTAL_NUMBERS }, (_, i) => i + 1).map((num) => {
          const isDrawn = drawnNumbers.includes(num);
          const isCurrent = num === currentNumber;
          
          return (
            <div 
              key={num} 
              style={{
                ...styles.cell,
                backgroundColor: isCurrent ? '#ff4757' : isDrawn ? '#2ed573' : '#f1f2f6',
                color: (isDrawn || isCurrent) ? 'white' : '#2f3542',
                transform: isCurrent ? 'scale(1.1)' : 'scale(1)',
                border: isCurrent ? '2px solid #2f3542' : '1px solid #dfe4ea'
              }}
            >
              {num}
            </div>
          );
        })}
      </div>
    </div>
  )
}


// Basic inline styles so the component works perfectly upon copy-paste
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    color: '#2f3542',
    marginBottom: '20px',
  },
  controlPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  currentNumberBox: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#ff4757',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
    boxShadow: '0 4px 10px rgba(255, 71, 87, 0.4)',
  },
  currentNumberText: {
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: 0,
  },
  buttons: {
    display: 'flex',
    gap: '15px',
    marginBottom: '15px',
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
  drawBtn: {
    backgroundColor: '#1e90ff',
  },
  resetBtn: {
    backgroundColor: '#747d8c',
  },
  stats: {
    fontSize: '1.1rem',
    color: '#57606f',
  },
  board: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '8px',
    marginTop: '20px',
  },
  cell: {
    padding: '15px 0',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default HousieGenerator