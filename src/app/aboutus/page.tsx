import React from 'react'

function page() {
  return (
    <div className='w-[1120px] h-[2044px] mt-[360px] ml-[160px]'>
      <div className='flex justify-around items-center'>
        <div>
          <h1 className='font-medium text-6xl'>Hello, I’m Mehmet Akif.
          </h1>
        </div>
        <div className='mt-8 font-normal'> 
          <p className='text-3xl'>A senior-year design student who trying to specialize in 3D modeling & texturing.

</p>
        </div>
      
      </div>
      <div className='mt-20'>
       <img className='w-[33.61px]'
       src='/images/↓.png'
       rel='arrow'/>
       </div>
       {/* {second section} */}

       <div className='flex justify-around items-center'>
        <div> 
          <h1> 01 / PROJECT NAME</h1>
          <p>Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.
</p>
<p>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
        </div>
        <div>
          <img className='w-[640px]'
          src='/images/Thumbnail.png'
          rel='Thumbnail'/>
        </div>
       </div>
 </div>
  )
}

export default page
