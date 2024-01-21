import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import Section from "./components/Section";
import NavigationBar from './components/NavBar';
import { useState } from 'react';


function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = (e) => {
    setScrollPosition(e.target);
};

  return (
    <div style={{margin: "auto"}}
    onScroll={handleScroll}>
      <div>
      <NavigationBar />
      <Section />
    </div>
    </div>
  );
}

export default App;
