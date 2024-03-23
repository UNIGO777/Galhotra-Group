// import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import { Route,  Routes } from 'react-router-dom';
import Home from './component/Home';




function App() {
  return (
    <div className="App-main overflow-hidden">
    <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;
