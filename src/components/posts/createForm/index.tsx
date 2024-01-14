'use client';

import { useFormState } from 'react-dom';

import {
  Input,
  Textarea,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';

import * as actions from '@/actions';
import FormButton from '@/components/common/formButton';

interface PostCreateFormProps {
  topicSlug: string,
};

export default function PostCreateForm({ topicSlug }: PostCreateFormProps) {
  const [formState, action] = useFormState(
    actions.createPost.bind(null, topicSlug),
    {
      errors: {},
    },
  );

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">
          Add post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a new post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="inside"
              placeholder="Insert new post title"
              isInvalid={!!formState.errors.title}
              errorMessage={!!formState.errors.title ? <><ul className="list-disc px-5">{formState.errors.title.map(err => <li key={err}>{err}</li>)}</ul></> : null}
              isClearable
            />
            <Textarea
              name="content"
              label="Description"
              labelPlacement="inside"
              placeholder="Add content to new post"
              isInvalid={!!formState.errors.content}
              errorMessage={!!formState.errors.content ? <><ul className="list-disc px-5">{formState.errors.content.map(err => <li key={err}>{err}</li>)}</ul></> : null}
            />
            {formState.errors._form ? (
              <div className="p-2 bg-red-100 border border-red-400 rounded text-red-600">
                <ul className={formState.errors._form.length > 1 ? 'list-disc' : ''}>{formState.errors._form.map(err => <li key={err}>{err}</li>)}</ul>
              </div>
            ) : null}
            <FormButton buttonConf={{
              color: 'primary',
            }}>
              Create post
            </FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>    
  );
}