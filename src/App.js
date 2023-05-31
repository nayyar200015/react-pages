import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Hello World!
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li>Ali</li>
            <li>Asad</li>
            <li>Nayyar</li>
            <li>Anas</li>
          </ul>
        </h2>
      </header>
    </div>
  );
}

export default App;
