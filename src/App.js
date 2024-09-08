import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Basic/Footer/Footer';
import { Header } from './components/Basic/Header/Header';
import { Update } from './components/Basic/Update/Update';
import { Home } from './components/pages/home/Home';
import { Donate } from './components/pages/Donate/Donate';
import { Network } from './components/pages/network/Network';
import { About } from './components/pages/about/About';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/donate' element={<Donate/>}/>
          <Route path='/network' element={<Network/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Update/>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
