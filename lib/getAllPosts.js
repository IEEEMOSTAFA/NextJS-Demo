// import React from 'react'

// export default async function getAllPosts() {
//  const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {cache: 'no-store'})
//  const posts = await data.json()
//     return posts;

//     if(!data.ok){
//         throw new Error('There was a Error fetching data')
//     }

// //  return (
// //     <ul>
// //         {
// //             posts.map((post) =>
            
// //             <li key={post.id}>{post.tittle}</li>)
// //         }
// //     </ul>
// //  )
// }




//   ------------correction--------------------



// lib/getAllPosts.js
export default async function getAllPosts() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
    cache: "no-store",
  });

  if (!result.ok) {
    throw new Error("There was an error fetching posts");
  }

  const posts = await result.json();
  return posts;
}
