import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

function App() {
  return (
<Router>
  <Navbar />
  <Container customClass="min-height">
    <Routes>
      <Route exatc path='/' element={<Home/>}/>
      <Route path='/contato' element={<Contato/>}></Route>
      <Route path='/company' element={<Company/>}/>
      <Route path='/newproject' element={<NewProject/>}/>
    </Routes>
  </Container>
  <Footer/>
</Router>
 );
}

export default App;
