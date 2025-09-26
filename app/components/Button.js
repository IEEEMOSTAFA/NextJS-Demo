
'use client'
import React from 'react'

export default function Button() {
  return (
    <div>
      <div className='mt-5'>
        
        <button className='p-2 bg-blue-500 text-white rounded' onClick={() => console.log('This is a button')}>Click Me</button>
      </div>
    </div>
  )
}
