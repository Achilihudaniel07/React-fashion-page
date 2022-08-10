import React from 'react'
import './Body.css';
import logo from'./images/logo.svg'
import hero from './images/hero.jpg'
import hero2 from './images/hero2.jpg'



function Body() {
  return (
    <div className='Fpage'>
      <div className='Content'>

      <img id ="companyname" src= {logo} alt="Company name" />

      <img id ="mobile" src={hero2} alt="Fine girl" />

      <h1> <span>WE'RE </span> COMING SOON</h1>
      <p>Hello fellow shopers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>

      <input type="e-mail" placeholder='name@gmail.com' required/><button> > </button>
      </div>

      <div className='Pic'>
          <img id="desk" src={hero} alt="Fine girl" />
          
      </div>
      
    
    </div>
  )
}

export default Body