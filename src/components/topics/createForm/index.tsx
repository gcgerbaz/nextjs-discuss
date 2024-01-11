import {
  Input,
  Textarea,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';

import * as actions from '@/actions';

export default function TopicCreateForm() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">
          Add topic
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createTopic}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a new topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="inside"
              placeholder="Insert new topic name"
            />
            <Textarea
              name="description"
              label="Description"
              labelPlacement="inside"
              placeholder="Describe your topic"
            />
            <Button color="primary">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>    
  );
}