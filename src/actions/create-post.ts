'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Post } from '@prisma/client';

import { auth } from '@/auth';
import { db } from '@/db';
import paths from '@/paths';

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
})

interface CreatePostFormState {
  errors: {
    title?: string[],
    content?: string[],
    _form?: string[],
  }
};

export async function createPost(
  topicSlug: string,
  formState: CreatePostFormState,
  formData: FormData,
): Promise<CreatePostFormState> {
  const result = createPostSchema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();
  
  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be logged in'],
      },
    };
  }

  let post: Post;
  try {
    const topic = await db.topic.findUnique({
      where: { 
        slug: topicSlug,
      },
    });

    if (!topic) {
      throw Error('Cannot find topic');
    }

    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        topicId: topic.id,
        userId: session.user.id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    }
    return {
      errors: {
        _form: ['Something totally unespected happened :('],
      },
    };
  }

  revalidatePath(paths.topicShow(topicSlug));
  redirect(paths.postShow(topicSlug, post.id));
}
