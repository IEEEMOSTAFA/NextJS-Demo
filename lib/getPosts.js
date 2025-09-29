// import React from 'react'

// export default async function getPosts(id) {
//     const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//      const data = await result.json()


    
//      return data;

  
// }



//    correction::



// lib/getPosts.js
export default async function getPosts(id) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store", // caching সমস্যা এড়াতে
  });
  if (!result.ok) throw new Error("Failed to fetch post");
  const data = await result.json();
  return data;
}

