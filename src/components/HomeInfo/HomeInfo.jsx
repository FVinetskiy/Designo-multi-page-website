import React from 'react'
import './HomeInfo.scss'

const HomeInfo = () => {
  return (
    <div className='home-info'>
      <figure className='home-info__figure'>
        <img
          className='home-info__img'
          src='./images/illustration-passionate.svg'
          alt='friendly'
        />
        <figcaption className='home-info__figcaption'>
          <p className='home-info__title'>Passionate</p>
          <p className='home-info__text'>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </figcaption>
      </figure>
      <figure className='home-info__figure'>
        <img
          className='home-info__img'
          src='./images/illustration-friendly.svg'
          alt='passionate'
        />
        <figcaption className='home-info__figcaption'>
          <p className='home-info__title'>Resourceful</p>
          <p className='home-info__text'>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </figcaption>
      </figure>

      <figure className='home-info__figure'>
        <img
          className='home-info__img'
          src='./images/illustration-resourceful.svg'
          alt='resourceful'
        />
        <figcaption className='home-info__figcaption'>
          <p className='home-info__title'>Friendly</p>
          <p className='home-info__text'>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

export default HomeInfo
