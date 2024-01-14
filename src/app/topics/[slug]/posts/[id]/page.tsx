import { Suspense } from "react";
import Link from "next/link";

// import { fetchCommentsByPostId } from "@/db/queries/comments";

import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";
import CommentListSkeleton from "@/components/comments/comment-list-skeleton";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/paths";

interface PostShowPageProps {
  params: {
    slug: string;
    id: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, id } = params;
  // const fetchData = () => fetchCommentsByPostId(id);

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {slug}
      </Link>
      <PostShow postId={id} />
      <CommentCreateForm postId={id} startOpen />
      {/* <CommentList fetchData={fetchData} /> */}
      <Suspense fallback={<CommentListSkeleton />}>
        <CommentList postId={id} />
      </Suspense>
    </div>
  );
}
