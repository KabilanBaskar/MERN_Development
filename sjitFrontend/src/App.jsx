import Home from './component/functional_component/Home.jsx'
import ClassCompeg from './component/Class_Componnet/classComponenet.jsx'
import Navbar from './component/functional_component/Navbar.jsx'
import About from './component/functional_component/About.jsx'
import Gallery from './component/functional_component/Gallery.jsx'
import UseEfect from './component/functional_component/Hooks/UseEffects.jsx'
import UseEffectApi from './component/functional_component/Hooks/UseEffectApi.jsx'
import UseMemo from './component/functional_component/Hooks/UseMemo.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <main>
      <BrowserRouter>
      <Navbar></Navbar>
          <Routes>
            <Route path = "/Home" element = {<Home promps = "HI" sjit = "Hello"/>}/>
            <Route path = "/About" element = {<About/> }/>
            <Route path = "/Gallery" element = {<Gallery/>} />
            <Route path = "/UseEffect" element = {<UseEfect/>} />
            <Route path = "/UseEffectApi" element = {<UseEffectApi/>} />
            <Route path = "/UseMemo" element = {<UseMemo/>} />
          </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App;
