import React from 'react'
import './LocationBlock.scss'
import {MapContainer, TileLayer} from 'react-leaflet'

const LocationBlock = () => {
  return (
    <div className='locations'>
      <div className='locations__item'>
        <div className='locations__img'>
          <MapContainer
            center={[32.79654681731154, -110.16339452965717]}
            zoom={3}
            scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
          </MapContainer>
        </div>
        <div className='locations__wrap-text'>
          <p className='locations__title'>Canada</p>
          <div className='locations__info'>
            <p className='locations__sub-title'>Designo Central Office</p>
            <p className='locations__text'>3886 Wellington Street</p>
            <p className='locations__text'>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className='locations__info'>
            <p className='locations__sub-title'>Contact</p>
            <p className='locations__text'>P : +1 253-863-8967</p>
            <p className='locations__text'>M : contact@designo.co</p>
          </div>
        </div>
      </div>
      <div className='locations__item locations__item--reverse'>
        <div className='locations__img'>
          <MapContainer
            center={[-61.42327697298839, 132.28264327133195]}
            zoom={3}
            scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
          </MapContainer>
        </div>
        <div className='locations__wrap-text'>
          <p className='locations__title'>Australia</p>
          <div className='locations__info'>
            <p className='locations__sub-title'>Designo AU Office</p>
            <p className='locations__text'>19 Balonne Street</p>
            <p className='locations__text'>New South Wales 2443</p>
          </div>
          <div className='locations__info'>
            <p className='locations__sub-title'>Contact</p>
            <p className='locations__text'>P : (02) 6720 9092</p>
            <p className='locations__text'>M : contact@designo.au</p>
          </div>
        </div>
      </div>
      <div className='locations__item'>
        <div className='locations__img'>
          <MapContainer
            center={[48.02497955179523, -1.693461125398985]}
            zoom={5}
            scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
          </MapContainer>
        </div>
        <div className='locations__wrap-text'>
          <p className='locations__title'>United Kingdom</p>
          <div className='locations__info'>
            <p className='locations__sub-title'>Designo UK Office</p>
            <p className='locations__text'>13 Colorado Way</p>
            <p className='locations__text'>Rhyd-y-fro SA8 9GA</p>
          </div>
          <div className='locations__info'>
            <p className='locations__sub-title'>Contact</p>
            <p className='locations__text'>P : 078 3115 1400</p>
            <p className='locations__text'>M : contact@designo.uk</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationBlock
