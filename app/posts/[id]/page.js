import getPostComment from '@/lib/getPostComment';
import getPosts from '@/lib/getPosts';
import React from 'react'
// import type { Metadata } from 'next'



export async function generateMetadata(params) {
  const {id} = params;
    const post = await getPosts(id)
  }


  
 
export default async function PostPage({params}) {
    const {id} = params;
    const postPromise = await getPosts(id);
    const commentsPromise = await getPostComment(id);

    const [post,comments] = await Promise.all([postPromise,commentsPromise]);

    console.log(post,comments);





 
// export const metadata: Metadata = {
//   title: 'My Blog',
//   description: 'This is metaData Blog',
// }    

 
  

  return (
    <div className='mt-5'>
        <h2 className='font-bold text-blue-500'>Tittle: {post.title}</h2>
        <p className='text-yellow-500'>Body: {post.body}</p>
        <p className='text-yellow-500'>comments: {post.body}</p>
      
    </div>
  )
}
