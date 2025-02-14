import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
