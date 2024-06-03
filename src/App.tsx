import './App.css'
import {Route, Routes} from 'react-router-dom'
import About from './pages/about/about';
import Voting from './pages/voting/voting';
import Header from './components/ui/header';
import Home from './pages/home/home';
import Footer from './components/ui/footer';

function App() {

  return (
    <>
    <Header>
    </Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/voting" element={<Voting />}></Route>
      </Routes>
      <Footer></Footer>
      
    </>
  )
}

export default App
