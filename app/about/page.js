
import React from 'react'
// import Button from  '@/components/Button'
import Button from '../blog/../components/Button'
import Image from 'next/image'
import image1 from '@/public/images/linkdin.jpg'
export default function MissionPage() {
  // throw new Error("this is error from about page");
  return (
    <div>
      <div>
        <h2> This is Mission  About page</h2>
      </div>
      <div>
        <p>lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>
      </div>
      <Button />


      <div className='w-[400px]'>
        <Image src={image1} alt="This is linkedin" />
      </div>

      
    </div >



  )
}
