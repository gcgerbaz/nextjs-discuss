import { cache } from 'react';
import type { Comment } from '@prisma/client';

import { db } from '@/db';

export type CommentListItem = (
  Comment & {
    user: {
      name: string | null,
      image: string | null,
    }
  }
);

export const fetchCommentsByPostId = cache((postId: string): Promise<CommentListItem[]> => {
  console.log(`Calling fetchCommentsByPostId with postId: ${postId}`);
  return db.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
});
