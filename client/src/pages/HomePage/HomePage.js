import React, { useEffect } from 'react'
import './HomePage.scss'
import Navbar from '../../components/Navbar/Navbar'
import Logo from '../../components/Logo/Logo'
import { Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import AdsList from '../../components/AdsList/AdsList'

export default function HomePage() {

  return (
    <div className='homePage'>
      <header className='headerContent'>
        <div className='container'>
          <div className='headerContent__content'>
            <Logo />
            <Navbar />
          </div>
        </div>
      </header>
      <div className="container">
        <div className='mainContent'>
          <aside className='mainContent__btns'>
            <div className="mainContent__newAd">
              <NavLink to='/newAd'>
                <Button>Дать объявление</Button>
              </NavLink>
            </div>
            <div className="mainContent__account">
              <NavLink to='/account'>
                <Button>Личный кабинет</Button>
              </NavLink>
            </div>
          </aside>
          <div className="mainContent__discounts">
            Здесь может быть ваша реклама
          </div>
        </div>
        <div className='ads'>
          <div className="ads__shares">
            Акции
          </div>
          <div className="ads__list">
            <AdsList/>
          </div>
        </div>
      </div>
    </div>
  )
}
