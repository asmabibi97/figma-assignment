import React from 'react'

function page() {
  return (
    <div className='flex flex-col min-h-screen py-5'>
    <div className='w-[1120px] ml-[160px] h-[166px] mt-[360px]'>
      <div className=' flex  items-center  justify-around '>
        <div className='w-1/2'>
          <h1 className='font-bold text-6xl'> Hi I’m Mehmet Akif Karasu, 3D artist & sculptor.</h1>
          <p className='text-3xl font-normal'>My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.
Now I’m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.</p>
        </div>
        <div className=' '>
          <img className='w-[421px] h-[590px]'
          src='images/ProfilePhoto.png'
          alt='profile picture'
          />
        </div>
      </div>
      <div className=' w-[623px] h-[216px] flex flex-col justify-around items-center mt-20 '>
      <div className='flex'>
        <h1 className=' w-[124px] font-medium  underline underline-offset-1 text-lg'>Main Software </h1>
        <p>Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger 
        </p>
      
        </div>
        <p className='w-[213px] text-start'>Adobe CC, Figma, Ableton </p>
       
        
        <div className='flex'>
        <h1 className=' w-[124px] font-medium  underline underline-offset-1 text-lg'>Main Skills </h1>
        <p>Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design </p>
        </div>
      </div>
      <div className="border-t border-black mt-20" />
      <div className='flex justify-between items-center mt-20  mb-12'> 
        <div> 
          <p>I am thrilled to answer to your next project </p>
        </div>
        <div> 
       <p> makifkarasu@outlook.com </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page
