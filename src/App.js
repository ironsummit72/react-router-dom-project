import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Footer from './components/footer/Footer'
import Header from './components/header/Header';
import Contact from './components/Contact';
import Rewards from './components/Rewards';
import Subscription from './components/Subscription';
import Orders from './components/Orders';
import Myaccount from './components/Myaccount';

function App() {
  return (
   <>
   <BrowserRouter>
<Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/rewards' element={<Rewards/>} />
    <Route path='/subscription' element={<Subscription/>} />
    <Route path='/order' element={<Orders/>} />
    <Route path='/myaccount' element={<Myaccount/>} />
   </Routes>
<Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
