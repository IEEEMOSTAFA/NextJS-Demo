import React from 'react'
import getPostComment from "@/lib/getPostComment";




export default async function Comments({ postId }) {


    // const comments = await getPostComment(postId);
    const comments = await getPostComment(postId);

    if(!comments || comments.length == 0){
        return <p className='text-green'>No Comments Yet</p>
    }
  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="text-green-600">
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  )
}
