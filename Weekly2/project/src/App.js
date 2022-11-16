import WelcomePage from './pages/WelcomePage';
import AboutUs from './pages/AboutUs';
import {Route, Routes} from 'react-router-dom';
import './App.css';


function App() {
  return(
    <>
    <Routes>
      <Route path='/' exact element={<WelcomePage />} />
      <Route path='/About/Us' exact element={<AboutUs />} />
    </Routes>
    </>
  );
};

export default App;
