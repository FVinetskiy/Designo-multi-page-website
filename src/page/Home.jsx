import AdditionalFooter from '../components/AdditionalFooter/AdditionalFooter'
import HomeInfo from '../components/HomeInfo/HomeInfo'
import HomeWinning from '../components/HomeWinning/HomeWinning'
import Navigation from '../components/Navigation/Navigation'

const dataNavigate = [
  {
    title: 'WEB DESIGN',
    path: '/web-design',
    id: 0,
    style: 'web',
  },
  {
    title: 'APP DESIGN',
    path: '/app-design',
    id: 1,
    style: 'app',
  },
  {
    title: 'GRAPHIC DESIGN',
    path: '/graphic',
    id: 2,
    style: 'graphic',
  },
]

const Home = () => {
  return (
    <div className='container'>
      <HomeWinning />
      <Navigation dataNavigate={dataNavigate} />
      <HomeInfo />
      <AdditionalFooter />
    </div>
  )
}

export default Home
