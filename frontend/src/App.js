import './App.css';
import Card from "./components/HomePage/Card";
import Section from "./components/HomePage/Section";
import NavBar from './components/Layout/NavBar';
import Event from './components/Event/Event';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = (e) => {
    setScrollPosition(e.target);
};

  return (
    <Router>
      <div style = {{margin: "auto"}}
    onScroll={handleScroll}>
        <NavBar />
      <Routes>
        <Route exact path= "/" element={
          <>
            <Section />
          </>
        }/>
        <Route path="event/:eventId" element={<Event />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
