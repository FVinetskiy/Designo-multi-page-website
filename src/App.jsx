import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {Route, Routes} from 'react-router-dom'
import Home from './page/Home'
import NotFound from './page/NotFound'
import WebDesign from './page/WebDesign'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='web-design' element={<WebDesign />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
