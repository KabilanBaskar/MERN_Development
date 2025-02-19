import Home from './component/functional_component/Home.jsx'
import ClassCompeg from './component/Class_Componnet/classComponenet.jsx'
import Navbar from './component/functional_component/Navbar.jsx'
import About from './component/functional_component/About.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <main>
      <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<ClassCompeg/> }/>
              <Route path = "/Home" element = {<Home promps = "HI" sjit = "Hello"/>}/>
              <Route path = "/Navbar" element = {<Navbar/> }/>
              <Route path = "/About" element = {<About/> }/>
          </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;
