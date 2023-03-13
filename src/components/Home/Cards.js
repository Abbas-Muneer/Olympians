import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import Image1 from '../Images/Image1.jpg';
import Image2 from '../Images/Image2.jpg';
import Image3 from '../Images/Image3.jpg';
import Image4 from '../Images/Image4.jpg';
import Image5 from '../Images/Image5.jpg';

function Cards() {
  return (
    <div className='Cards'>
      <h1>Hello From Olympians</h1>
      <div className = 'aboutus__description'>
        We are <b> Level 5 Computer Science </b> students studying at <b> IIT </b>.
        
      </div>
      <div className='aboutus__container'>
        <div className='aboutus__wrapper'>
          <ul className='aboutus__items'>
            <CardItem
              src = {Image2}
              // text='I am the Captain of this Ship'
              text = 'Abbas Munner - 2nd Year CS'
              label='Captain'
              // path='/services'
            />
          </ul>
        </div>
        <div className='aboutus__wrapper'>
          <ul className='aboutus__items'>  
            <CardItem
              src = {Image2}
              text='Isuru Udana - 2nd Year CS'
              label='Crew'
              path='/services'
            />
            <CardItem
              src = {Image3}
              text='Fahith Ahmed - 2nd Year CS'
              label='Crew'
              path='/services'
            />
          </ul>
        </div>
        <div className='aboutus__wrapper'>
          <ul className='aboutus__items'>  
            <CardItem
              src = {Image4}
              text='Laxen Nixon - 2nd Year CS'
              label='Crew'
              path='/products'
            />
            <CardItem
              src = {Image5}
              text='Kaladaran Chanthirakumar - 2nd Year CS'
              label='Crew'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
