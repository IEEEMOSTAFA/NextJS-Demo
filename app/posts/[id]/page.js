import getPosts from '@/lib/getPosts';
import React from 'react'

export default async function PostPage({params}) {
    const {id} = params;
    const post = await getPosts(id)
  return (
    <div className='mt-5'>
        <h2 className='font-bold text-blue-500'>Tittle: {post.title}</h2>
        <p className='text-yellow-500'>Body: {post.body}</p>
      
    </div>
  )
}
