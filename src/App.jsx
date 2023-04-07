import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {Route, Routes} from 'react-router-dom'
import Home from './page/Home'
import NotFound from './page/NotFound'
import WebDesign from './page/WebDesign'
import AppDesign from './page/AppDesign'
import Graphic from './page/Graphic'
import OurCompany from './page/OurCompany'
import Contact from './page/Contact'
import Locations from './page/Locations'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/web-design' element={<WebDesign />} />
        <Route path='/app-design' element={<AppDesign />} />
        <Route path='/graphic' element={<Graphic />} />
        <Route path='/our-company' element={<OurCompany />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/locations' element={<Locations />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
