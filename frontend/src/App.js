import './App.css';
import Card from "./components/HomePage/Card";
import Section from "./components/HomePage/Section";
import NavBar from './components/Layout/NavBar';
import Event from './components/Event/Event';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  async function fetchMostPopularEvents() {
    try {
        const response = await fetch(`http://localhost:6969/events`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e.message);
    }
  }

  async function fetchThisWeek() {
    try {
        const response = await fetch(`http://localhost:6969/events/week`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e.message);
    }
  }

  async function fetchAllEvents() {
    try {
        const response = await fetch(`http://localhost:6969/events`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e.message);
    }
  }
  
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
            <Section fetchEvents={fetchAllEvents} />
            <Section fetchEvents={fetchThisWeek} />
            <Section fetchEvents={fetchAllEvents} />
          </>
        }/>
        <Route path="event/:eventId" element={<Event />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
