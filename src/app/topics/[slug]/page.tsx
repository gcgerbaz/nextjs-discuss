import { fetchPostsByTopicSlug } from '@/db/queries/posts';

import PostList from '@/components/posts/post-list';
import PostCreateForm from '@/components/posts/createForm';

interface TopicShowPageProps {
  params: {
    slug: string,
  },
};

export default function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;

  const fetchDataFn = () => fetchPostsByTopicSlug(slug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
        <h1>{slug}</h1>
        <PostList fetchData={fetchDataFn} />
      </div>
      <div className="py-3 px-2 flex flex-col gap-3 border rounded">
        <PostCreateForm topicSlug={slug} />
      </div>
    </div>    
  );
}