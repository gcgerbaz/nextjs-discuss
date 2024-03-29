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

export default function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">
          Add topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a new topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="inside"
              placeholder="Insert new topic name"
              isInvalid={!!formState.errors.name}
              errorMessage={!!formState.errors.name ? <><ul className="list-disc px-5">{formState.errors.name.map(err => <li key={err}>{err}</li>)}</ul></> : null}
              isClearable
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="inside"
              placeholder="Describe your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={!!formState.errors.description ? <><ul className="list-disc px-5">{formState.errors.description.map(err => <li key={err}>{err}</li>)}</ul></> : null}
            />
            {formState.errors._form ? (
              <div className="p-2 bg-red-100 border border-red-400 rounded text-red-600">
                <ul className={formState.errors._form.length > 1 ? 'list-disc' : ''}>{formState.errors._form.map(err => <li key={err}>{err}</li>)}</ul>
              </div>
            ) : null}
            <FormButton buttonConf={{
              color: 'primary',
            }}>
              Create topic
            </FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>    
  );
}