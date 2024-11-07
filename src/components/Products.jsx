import React from 'react'
import Card from './components/Card'

import { ceraveAcneControlCleanser, ceraveFacialMoistureLotion } from '../assets'

const Products = () => {

  return (
    <article>
      <section className='section'>
        <span id=''>Rejuvenate</span>
        <span> Products</span>
        <div className='products-section'>
          <Card />
        </div>
      </section>
    </article>
  )
}

export default Products