import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Flight from './component/Flight';
import Signup from './component/Signup';
import Login from './component/Login';
import About from './component/About';
import Contact from './component/Contact';
import Booking from './component/Booking';
import Bookingform from './component/Bookingform';
import Bookingdata from './component/Bookingdata';


function App() {
  return (
    <Router>
      <div>
       <Routes>
        <Route path='/' element={<Flight/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/bookingform' element={<Bookingform/>}/>
        <Route path='/bookingdata' element={<Bookingdata/>}/>
       </Routes>
     </div>
    </Router>
    
  );
}

export default App;
