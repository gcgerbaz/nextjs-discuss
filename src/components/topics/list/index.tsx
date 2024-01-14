import Link from 'next/link';
import { Chip } from '@nextui-org/react';

import { db } from '@/db';
import paths from '@/paths';

export default async function TopicsList() {
  const topics = await db.topic.findMany();

  return (
    <div>
      {topics.map(topic => (
        <Link key={topic.id} href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      ))}    
    </div>
  );
}