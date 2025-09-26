import React from 'react'

export default function BlogLayout({children}) {
  return (
    <div>
        {children}
      <p>This is the blog layout page.It is only show when any one enter in the blog folder</p>
    </div>
  )
}
