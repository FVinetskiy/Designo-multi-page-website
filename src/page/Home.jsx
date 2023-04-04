import AdditionalFooter from '../components/AdditionalFooter/AdditionalFooter'
import HomeInfo from '../components/HomeInfo/HomeInfo'
import HomeWinning from '../components/HomeWinning/HomeWinning'
import Navigation from '../components/Navigation/Navigation'

const Home = () => {
  return (
    <div className='container'>
      <HomeWinning />
      <Navigation />
      <HomeInfo />
      <AdditionalFooter />
    </div>
  )
}

export default Home
