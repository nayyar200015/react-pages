import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Hello World!
          <ul style={{ listStyle: 'none' }}>
            <li>Ali</li>
            <li>Asad</li>
            <li>Nayyar</li>
            <li>Anas</li>
          </ul>
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
