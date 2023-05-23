import './App.css';
import { HomePage } from './Components/HomePage';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { Apple } from './Components/Apple';
import { NotFound } from './Components/NotFound';

const App = () => {
  return (
  <BrowserRouter>
      <div>
        <Link to="/" style={{marginleft: 5,}}> Home </Link>
        <Link to="/apple" style={{marginleft: 15,}}> Apple </Link>
        <Link to="/applet" style={{marginleft: 30,}}> Applet </Link>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/apple' element={<Apple />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
        
  </BrowserRouter>
  );
}

export default App;