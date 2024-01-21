import './App.css';
import Card from "./components/HomePage/Card";
import Section from "./components/HomePage/Section";
import NavBar from './components/Layout/NavBar';
import Event from './components/Event/Event';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import MakeEvent from './components/HomePage/MakeEvent';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  async function fetchMostPopularEvents() {
    try {
        const response = await fetch(`http://localhost:6969/events/popular`);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e.message);
    }
  }

  async function fetchThisWeekEvents() {
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
          <div className ="containerCard">
          <>
          <MakeEvent />
            <Section fetchEvents={fetchMostPopularEvents} title={"Most Popular"}/>
            <Section fetchEvents={fetchThisWeekEvents} title={"This Week"}/>
            <Section fetchEvents={fetchAllEvents} title={"All Events"}/>

          </>
          </div>
        }/>
        <Route path="event/:eventId" element={<Event />}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
