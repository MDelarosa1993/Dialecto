import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';

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
