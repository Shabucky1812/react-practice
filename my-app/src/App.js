import logo from './logo.svg';
import './App.css';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <StatefulGreetingWithPrevState greeting="I'm a stateful class component!" name="Artemis" />
    </div>
  );
}

export default App;
