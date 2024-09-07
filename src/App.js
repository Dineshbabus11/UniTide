import './App.css';
import { Footer } from './components/Basic/Footer/Footer';
import { Header } from './components/Basic/Header/Header';
import { Update } from './components/Basic/Update/Update';
import { Home } from './components/pages/home/Home';


function App() {
  return (
    <>
      <Header/>
      <div className='main-content'>
        <Home/>
        <Update/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
