import { redirect } from 'next/navigation';

import paths from '@/paths';
import { fetchPostsBySearchTerm } from '@/db/queries/posts';
import PostList from '@/components/posts/post-list';

interface SearchPageProps {
  searchParams: {
    term: string,
  }
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;
  
  const fetchData = () => fetchPostsBySearchTerm(term);

  if (!term) {
    redirect(paths.home());
  }

  return (
    <div>
      {term}
      <PostList fetchData={fetchData} />
    </div>
  );
}
