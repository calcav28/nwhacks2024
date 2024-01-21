import logo from './logo.svg';
import './App.css';
import TestButton from "./components/TestButton";
import Card from "./components/Card";
import Section from "./components/Section";
import NavigationBar from './components/NavBar';


function App() {
  return (
    <div style={{margin: "auto"}}>
      <div>
      <NavigationBar />
      <Section />
    </div>
    </div>
  );
}

export default App;
