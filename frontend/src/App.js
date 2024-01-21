import logo from './logo.svg';
import './App.css';
import TestButton from "./components/TestButton";
import Card from "./components/Card";
import Section from "./components/Section";
import NavigationBar from './components/NavBar';
import Event from './components/Event';


function App() {
  return (
    <div style={{margin: "auto"}}>
      <div>
      <NavigationBar />
      <Section />
      <Event />
    </div>
    </div>
  );
}

export default App;
