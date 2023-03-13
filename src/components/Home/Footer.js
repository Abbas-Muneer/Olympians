import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  
  // const [commentSize, setCommentSize] = useState(1);

  // function handleCommentInput(event){
  //   setCommentSize
  // }
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          <b>Let Us Know What You Think</b>
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              // rows = {commentSize}
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <section className = "footer-comment">
      {/* <div className = "footer-comment"> */}
          <p className = "footer-comment-text">
            Leave a Comment
          </p>
          <div className = "input-areas">
            <form>
              <textarea
                className = "footer-input"
                name = "comment"
                type = "text"
                placeholder = "Leave a Comment"
              />
            </form>
          </div>
        {/* </div> */}
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            {/* <Link to='/'>Testimonials</Link> */}
            {/* <Link to='/'>Careers</Link> */}
            {/* <Link to='/'>Investors</Link> */}
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            {/* <Link to='/'>Destinations</Link> */}
            {/* <Link to='/'>Sponsorships</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Site - Map</h2>
            <Link to='/'>Homepage</Link>
            <Link to='/'>Login / Signup</Link>
            <Link to='/'>Medicines</Link>
            <Link to='/'>How It Works</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Skin Disease Information</h2>
            <Link to='/'>Skin Cancer</Link>
            <Link to='/'>Acne</Link>
            <Link to='/'>Eczema</Link>
            <Link to='/'>Psoriasis</Link>
            <Link to = "/">Melanoma</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Olympians
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Olympians © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
