"use client"
import React from 'react'
import Container from '@/utils/Container/Container';
import ScrollAnimation from '../ReusableComponents/ScrollAnimation';

const Clients = () => {

  return (
    <section >
      <Container className="py-8 md:py-16 lg:py-20">
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