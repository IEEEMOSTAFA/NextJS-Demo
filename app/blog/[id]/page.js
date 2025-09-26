import { notFound } from 'next/navigation';
import React from 'react'

export default function BlogPage({params}) {
    const {id} = params;
    
    if(id > 4){
        notFound();
    }
  return (
    <div className='mt-10'>
      <p>The blog id is : {id}</p>
    </div>
  )
}
