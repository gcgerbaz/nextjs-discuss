'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Topic } from '@prisma/client';

import { auth } from '@/auth';
import { db } from '@/db';
import paths from '@/paths';

const createTopicSchema = z.object({
  name: z.string().min(3).regex(/^[a-z-]+$/, {
    message: 'Must be lowercase letters or dashes without spaces',
  }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[],
    description?: string[],
    _form?: string[],
  },
};

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
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

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
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
  
  revalidatePath(paths.home());
  redirect(paths.topicShow(topic.slug));
}
