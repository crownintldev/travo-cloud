"use client"
import React from 'react'
import Container from '@/utils/Container/Container';
import ScrollAnimation from '../ReusableComponents/ScrollAnimation';

const Clients = () => {

  return (
    <section className='md:pt-20 md:pb:10 py-5'>
      <Container>
        <h2 className='md:text-3xl text-2xl font-semibold text-center '>
           Trusted by Companies 
        </h2>
        <p className='text-center mb-10'>Trusted by Open Source, enterprise, and more</p>
        <div>
           <ScrollAnimation/>
        </div>
      </Container>
    </section>
  )
}

export default Clients