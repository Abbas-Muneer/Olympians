import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='aboutus__item'>
        <Link className='aboutus__item__link' to={props.path}>
          <figure className='aboutus__item__pic-wrap' data-category={props.label}>
            <img
              className='aboutus__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='aboutus__item__info'>
            <h5 className='aboutus__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
