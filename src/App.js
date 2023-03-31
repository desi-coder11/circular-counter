import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./styles.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
     
      <div className="value">{remainingTime}</div>
    </div>
  );
};

function App() {

  const [remainingTime, setRemainingTime] = useState(20);
  const handleClick = () => {
    setRemainingTime(prevRemainingTime => prevRemainingTime + 10);
  }

  return (
    <div className="App">
      <h1>
        Routine Starting in...
      </h1>
      <p>Subheading here</p>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={remainingTime}
          colors={"purple"}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
     

     

<div style={{ display: 'flex', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
  <button onClick={handleClick} 
    style={{ 
      borderRadius: '50px',
      backgroundColor: 'white',
      color: 'purple',
      padding: '5px 15px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
      marginTop:'20px',
      marginRight: '70px'
    }}
  >+ 10 sec
  </button>

  <button 
    style={{ 
      borderRadius: '50px',
      backgroundColor: 'white',
      color: 'purple',
      padding: '5px 15px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
      marginTop:'20px',
      marginLeft: '70px'
    }}
  >
     ⏭️ skip
  </button>
</div>

{/* card */}

<div class="card">
  <div class="card-header">
    Step 2/3
  </div>
  
  
  <div class="card-body">
  
    <h4 class="card-title">Cleansing</h4>
    <p class="card-text">🕔 60 sec </p>
  </div>
  <div class="card-footer">
    How to do
  </div>
</div>





    </div>
  );
}



export default App