
import './App.css';
import Header from './pages/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
