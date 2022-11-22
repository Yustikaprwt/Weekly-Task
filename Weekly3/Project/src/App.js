import WelcomePage from './pages/WelcomePage';
import MoreInfo from './pages/MoreInfo';
import Recommendation from './pages/Recommendation';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import {Route, Routes} from 'react-router-dom';
import './App.css';


function App() {
  return(
    <>
    <Routes>
      <Route path='/' exact element={<WelcomePage />} />
      <Route path='/More/Info' exact element={<MoreInfo />} />
      <Route path='/Recommendation/page' exact element={<Recommendation />} />
      <Route path='About/Us' exact element={<AboutUs />} />
      <Route path='Contact/Info' exact element={<Contact />} />
    </Routes>
    </>
  );
};

export default App;
