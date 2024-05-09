import { createWidget } from './widgets';
import './App.css';
import { useEffect, useRef } from 'react';

const App = () => {
  const widgetRef = useRef(null);
  
  

  const handleLoginComplete = (userDetails) => {
    console.log('Logged in:', userDetails);
  };

  useEffect(() => {
    if(!widgetRef.current){
      widgetRef.current = createWidget('#widget-container');
    }
    
  }, []);

  return (
    <div className="app">
      <div id="widget-container"></div>
      <button onClick={() => widgetRef.current.openLogin({ onLoginComplete: handleLoginComplete })}>Open Login</button>
      <button onClick={() => widgetRef.current.showInfo()}>Show Info</button>
    </div>
  );
};

export default App;
