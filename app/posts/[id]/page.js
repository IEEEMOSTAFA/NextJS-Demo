


// -----------correction----------------




import Comments from "@/app/components/Comments";
import getPostComment from "@/lib/getPostComment";
import getPosts from "@/lib/getPosts";
import React, { Suspense } from "react";
import CommentsLoading from "@/app/components/CommentsLoading";
// Metadata Generate করার জন্য
export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPosts(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = await params;

  // Promise.all ব্যবহার
  // const [post, comments] = await Promise.all([
  //   getPosts(id),
  //   getPostComment(id),
  // ]);
//   console.log(post, comments);


 // ✅ শুধু post fetch করুন - comments এখানে fetch করবেন না!
  const post = await getPosts(id);
  console.log(post);

  return (
    <div className="mt-5">
      <h2 className="font-bold text-blue-500">Title: {post.title}</h2>
      <p className="text-yellow-500">Body: {post.body}</p>

      <h3 className="font-bold mt-4">Comments:</h3>
      {/* <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="text-green-600">
            {comment.body}
          </li>
        ))}
      </ul> */}

      <Suspense fallback={<CommentsLoading/>}>
        <Comments postId={id}></Comments>
      </Suspense>
    </div>
  );
}
