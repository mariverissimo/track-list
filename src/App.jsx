import './App.css'
import { UserProvider } from "./UserContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Habitos from './Habitos'
import Hoje from './Hoje'
import Topo from './Topo'
import Login from './Login'
import Cadastro from './Cadastro'
import Footer from './Footer'

function App() {
  return (
    <>
     <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />

            <Route path='/cadastro' element={<Cadastro />} />

            <Route path='/habitos' element={
              <>
              <Topo />
              <Habitos />
              <Footer />
              </>
              } />
              
            <Route path='/hoje' element={
              <>
              <Topo />
              <Hoje />
              <Footer />
              </>
              } />
          </Routes>
        </BrowserRouter>
     </UserProvider>
    </>
  )
}

export default App;
