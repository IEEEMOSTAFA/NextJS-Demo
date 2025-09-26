import Link from 'next/link'
import React from 'react'

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "First blog 1",
      description: "This is my first blog"
    },
    {
      id: 2,
      title: "Second blog 2",
      description: "This is my 2nd blog"
    },
    {
      id: 3,
      title: "Third blog 3",
      description: "This is my 3rd blog"
    },
    {
      id: 4,
      title: "Fourth blog 4",
      description: "This is my 4th blog"
    }
  ]
  // throw new Error("this is error from about page");
  return (
    <div>
      <h2> This is Blog page</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}