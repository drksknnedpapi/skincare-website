import React from 'react'
import '../index.css';
import '../styles/Footer.css'

import { logo } from '../../public/index'

const Footer = () => {
  return (
    <section>
      <footer>
          <img src={logo} alt={logo} />
          <div>
            <ul>
              <li>Call Us: <a href="/">+233(0)539-068-280</a></li>
              <li>Email Us:<a href="#"> phillyscare@gmail.com</a></li>
            </ul>
          </div>
      </footer>
    </section>
  )
}

export default Footer