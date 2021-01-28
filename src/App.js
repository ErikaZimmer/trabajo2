import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Erika Zimmer</h1>
        <p>
          Trabajo 1
        </p>
        
      </header>
    </div>
  );
}

export default App;
