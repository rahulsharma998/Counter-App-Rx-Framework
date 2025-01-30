const counterView = ({ count, onIncrement, onDecrement, onReset, onToggleAuto, autoIncrement }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'gold', fontFamily: 'Arial, sans-serif', padding: '15px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '15px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', padding: '35px 45px', textAlign: 'center', width: '350px', minHeight: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', transition: 'transform 0.3s ease' }}>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: 'darkgray', marginBottom: '20px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Counter: {count}</h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button onClick={onIncrement} style={{ fontSize: '18px', padding: '12px 28px', borderRadius: '8px', border: 'none', backgroundColor: 'green', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s ease, transform 0.2s', boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)' }}>+</button>
            <button onClick={onDecrement} style={{ fontSize: '18px', padding: '12px 28px', borderRadius: '8px', border: 'none', backgroundColor: 'red', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s ease, transform 0.2s', boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)' }}>-</button>
            <button onClick={onReset} style={{ fontSize: '18px', padding: '12px 28px', borderRadius: '8px', border: 'none', backgroundColor: 'orange', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s ease, transform 0.2s', boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)' }}>Reset</button>
            <button onClick={onToggleAuto} style={{ fontSize: '16px', padding: '12px 28px', borderRadius: '8px', border: 'none', backgroundColor: 'blue', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s ease, transform 0.2s', boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)' }}>
              {autoIncrement ? "Stop Auto" : "Start Auto"}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default counterView;
  