import React from 'react'

export default async function getAllPosts() {
 const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {cache: 'no-store'})
 const posts = await data.json()
    return posts;

//  return (
//     <ul>
//         {
//             posts.map((post) =>
            
//             <li key={post.id}>{post.tittle}</li>)
//         }
//     </ul>
//  )
}
