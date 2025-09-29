// import React from 'react'

// export default async function getPostComment() {
//     const result = await fetch(`https://jsonplaceholder.typicode.com/${id}/comments`)
//   return (
//     <div>
      
//     </div>
//   )
// }



//     correction---------------------------


// lib/getPostComment.js
export default async function getPostComment(id) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    cache: "no-store",
  });

  if (!result.ok) {
    throw new Error("There was an error fetching comments");
  }

  const comments = await result.json();
  return comments;
}
