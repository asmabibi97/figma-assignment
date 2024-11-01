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
        <div className='w-1/2'> 
          <h1 className='text-lg'> 01 / PROJECT NAME</h1>
          <p className='text-lg'>Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.
</p>
<p className='text-sm'>Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.</p>
<p className='underline underline-offset-1 mt-28'>More shots from this project ↗</p>
        </div>
        <div className=''>
          <img className='w-[640px]'
          src='/images/Thumbnail.png'
          rel='Thumbnail'/>
        </div>
       </div>
       <div className="border-t border-black mt-20" />
       {/* 3rd section */}
       <div className='flex justify-around items-center mt-32'>
        <div className='w-1/2'> 
          <h1 className='text-lg'>02 / PROJECT NAME</h1>
          <p className='text-lg'>Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.

</p>

<p className='underline underline-offset-1 mt-28'>See case study →</p>
        </div>
        <div className=''>
          <img className='w-[640px]'
          src='/images/Thumbnail.png'
          rel='Thumbnail'/>
        </div>
       </div>
       <div className="border-t border-black mt-20" />
       {/* 4th section */}

       <div className='flex justify-around items-center mt-32'>
        <div className='w-1/2'> 
          <h1 className='text-lg'>03 / PROJECT NAME</h1>
          <p className='text-lg'>Experimental creature modeling for school project.




</p>

<p className='underline underline-offset-1 mt-28'>Project WIP</p>
        </div>
        <div className=''>
          <img className='w-[640px]'
          src='/images/Thumbnail.png'
          rel='Thumbnail'/>
        </div>
       </div>
       <div className="border-t border-black mt-20" />

 </div>
  )
}

export default page
