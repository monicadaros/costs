import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'

function App() {
  return (
<Router>
  <ul>
    <Link to='/'>Home</Link>
    <Link to='/contato'>Contato</Link>
    <Link to='/company'>Empresa</Link>
    <Link to='/newproject'>Novo Projeto</Link>

  </ul>
  <Container customClass="min-height">
    <Routes>
      <Route exatc path='/' element={<Home/>}/>
      <Route path='/contato' element={<Contato/>}></Route>
      <Route path='/company' element={<Company/>}/>
      <Route path='/newproject' element={<NewProject/>}/>
    </Routes>
  </Container>
</Router>
  );
}

export default App;
