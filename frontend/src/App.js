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
    const today = new Date();
    const plusSevenDays = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const params = {
      "event_date[gte]": today.toISOString(),
      "event_date[lte]": plusSevenDays.toISOString()
    }
    const queryParams = new URLSearchParams(params).toString();

    try {
        const response = await fetch(`http://localhost:6969/events?${queryParams}`);
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
            <Section fetchEvents={fetchAllEvents} />
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
