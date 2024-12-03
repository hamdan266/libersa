import React from 'react'
import { HeroParticle } from './HeroParticle'

export default function HeroSection() {
  return (
    <div className='relative h-screen'>
      <div className="absolute top-0 w-full h-screen z-10 flex items-center justify-center flex-col">
        <h1>hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque praesentium nihil harum quia tenetur delectus maiores culpa facilis </p>
      </div>
      <HeroParticle />
    </div>
  )
}
