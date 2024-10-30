import Link from 'next/link'
import React from 'react'


function Header() {
  return (
    <div>
    <div className='   flex justify-between  px-6  mt-[102px] w-[1120px]  h-[35px] ml-8 items-center '>
  
      <div>
        <img className='w-[67.46px] h-[23px]'
        src='images/site-logo.png'
        alt='site-logo'
        />
         </div>
      <div className='  '>
        <ul className='flex  gap-6 items-center pt-3 font-bold text-base '>
         <Link href="/" ><li>work</li> </Link>
          <Link href="/aboutus"><li>About</li></Link>
          <li>Playground </li>
          <li>contact</li>
        </ul>
       
      </div>
      </div>
   </div>
  )
}

export default Header
