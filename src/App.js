import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Basic/Footer/Footer';
import { Header } from './components/Basic/Header/Header';
import { Update } from './components/Basic/Update/Update';
import { Home } from './components/pages/home/Home';
import { Donate } from './components/pages/Donate/Donate';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/donate' element={<Donate/>}/>
        </Routes>
        <Update/>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
