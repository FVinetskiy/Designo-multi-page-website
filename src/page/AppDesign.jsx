import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import AdditionalFooter from '../components/AdditionalFooter/AdditionalFooter'
import TitleBlock from '../components/TitleBlock/TitleBlock'
import Portfolio from '../components/Portfolio/Portfolio'

const dataNavigate = [
  {
    title: 'WEB DESIGN',
    path: '/web-design',
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
    src: 'images/image-airfilter.jpg',
    title: 'Airfilter',
    text: 'Solving the problem of poor indoor air quality by filtering the air',
  },
  {
    id: 1,
    src: 'images/image-eyecam.jpg',
    title: 'Eyecam',
    text: 'Product that lets you edit your favorite photos and videos at any time',
  },
  {
    id: 2,
    src: 'images/image-faceit.jpg',
    title: 'Faceit',
    text: 'Get to meet your favorite internet superstar with the faceit app',
  },
  {
    id: 3,
    src: 'images/image-todo.jpg',
    title: 'Todo',
    text: 'A todo app that features cloud sync with light and dark mode',
  },
  {
    id: 4,
    src: 'images/image-loopstudios.jpg',
    title: 'Loopstudios',
    text: 'A VR experience app made for Loopstudios',
  },
]

const AppDesign = () => {
  return (
    <div className='container'>
      <TitleBlock
        title='App Design'
        description={
          'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
        }
      />
      <Portfolio dataPortfolio={dataPortfolio} />
      <Navigation structure={'structure'} dataNavigate={dataNavigate} />
      <AdditionalFooter />
    </div>
  )
}

export default AppDesign
