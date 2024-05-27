import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/home';
import About from './pages/about/about';
import Voting from './pages/voting/voting';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/voting" element={<Voting />}></Route>
      </Routes>
      
    </>
  )
}

export default App
