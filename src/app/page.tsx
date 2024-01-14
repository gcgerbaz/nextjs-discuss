import { Divider } from '@nextui-org/react';

import { fetchPosts } from '@/db/queries/posts';

import PostList from '@/components/posts/post-list';
import TopicCreateForm from '@/components/topics/createForm';
import TopicsList from '@/components/topics/list';

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
        <h1>Top posts</h1>
        <PostList fetchData={fetchPosts} />
      </div>
      <div className="py-3 px-2 flex flex-col gap-3 border rounded">
        <TopicCreateForm />
        <Divider />
        <TopicsList />
      </div>
    </div>
  );
}
