import getAllPosts from '@/lib/getAllPosts'
import React from 'react'

export default async function Posts() {
    const posts = await getAllPosts();
    console.log(posts);
    return (
        <div>
            <h2>This is Posts page</h2>

            <ul className='list-disc font-bold text-green-500'>
                {
                    posts.map((post) =>

                        <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}
