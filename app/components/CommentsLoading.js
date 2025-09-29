import React from 'react'

export default function CommentsLoading() {
  return (
     <div className="space-y-3">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      <p className="text-gray-500 text-sm">Loading comments...</p>
    </div>
  )
}




