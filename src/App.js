import logo from './logo.svg';
import './App.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <IconButton color="primary">
          <AcUnitIcon/>
        </IconButton>
        
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
