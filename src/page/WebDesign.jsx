import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import AdditionalFooter from '../components/AdditionalFooter/AdditionalFooter'
import TitleBlock from '../components/TitleBlock/TitleBlock'
import Portfolio from '../components/Portfolio/Portfolio'

const dataNavigate = [
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

const dataPortfolio = [
  {
    id: 0,
    src: 'images/image-express.jpg',
    title: 'Express',
    text: 'A multi-carrier shipping website for ecommerce businesses',
  },
  {
    id: 1,
    src: 'images/image-transfer.jpg',
    title: 'Transfer',
    text: 'Site for low-cost money transfers and sending money within seconds',
  },
  {
    id: 2,
    src: 'images/image-photon.jpg',
    title: 'Photon',
    text: 'A state-of-the-art music player with high-resolution audio and DSP effects',
  },
  {
    id: 3,
    src: 'images/image-builder.jpg',
    title: 'Builder',
    text: 'Connects users with local contractors based on their location',
  },
  {
    id: 4,
    src: 'images/image-blogr.jpg',
    title: 'Blogr',
    text: 'Blogr is a platform for creating an online blog or publication',
  },
  {
    id: 5,
    src: 'images/image-camp.jpg',
    title: 'Camp',
    text: 'Get expert training in coding, data, design, and digital marketing',
  },
]

const WebDesign = () => {
  return (
    <div className='container'>
      <TitleBlock
        title='Web Design'
        description={
          'We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
        }
      />
      <Portfolio dataPortfolio={dataPortfolio} />
      <Navigation structure={'structure'} dataNavigate={dataNavigate} />
      <AdditionalFooter />
    </div>
  )
}

export default WebDesign
