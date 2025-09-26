import getAllPosts from '@/lib/getAllPosts'
import React from 'react'
import Link from 'next/link';
export default async function Posts() {
    const posts = await getAllPosts();
    console.log(posts);
    return (
        <div>
            <h2>This is Posts page</h2>

            <ul className='list-disc font-bold text-green-500'>
                {
                    posts.map((post) =>

                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                            {post.title}
                            </Link>
                            
                            </li>)
                }
            </ul>
        </div>
    )
}
