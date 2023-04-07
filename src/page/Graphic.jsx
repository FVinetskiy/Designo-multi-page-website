import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import AdditionalFooter from '../components/AdditionalFooter/AdditionalFooter'
import TitleBlock from '../components/TitleBlock/TitleBlock'
import Portfolio from '../components/Portfolio/Portfolio'

const dataNavigate = [
  {
    title: 'APP DESIGN',
    path: '/app-design',
    id: 0,
    style: 'app',
  },
  {
    title: 'WEB DESIGN',
    path: '/web-design',
    id: 1,
    style: 'web',
  },
]

const dataPortfolio = [
  {
    id: 0,
    src: 'images/image-change.jpg',
    title: 'Tim Brown',
    text: 'A book cover designed for Tim Brown’s new release, ‘Change’',
  },
  {
    id: 1,
    src: 'images/image-boxed-water.jpg',
    title: 'Boxed water',
    text: 'A simple packaging concept made for Boxed Water',
  },
  {
    id: 2,
    src: 'images/image-science.jpg',
    title: 'Science!',
    text: 'A poster made in collaboration with the Federal Art Project',
  },
]

const Graphic = () => {
  return (
    <div className='container'>
      <TitleBlock
        title='Graphic design'
        description={
          'We deliver eye-catching branding materials that are tailored to meet your business objectives.'
        }
      />
      <Portfolio dataPortfolio={dataPortfolio} />
      <Navigation structure={'structure'} dataNavigate={dataNavigate} />
      <AdditionalFooter />
    </div>
  )
}

export default Graphic
