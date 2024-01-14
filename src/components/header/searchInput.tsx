'use client';

// se si usa useSearchParams bisogna wrappare il componente in un Suspense
import { useSearchParams } from 'next/navigation';

import { Input } from '@nextui-org/react';

import * as actions from '@/actions';

export default function SearchInput() {
  const searchParams = useSearchParams();
  return ( 
    <form action={actions.search}>
      <Input
        name="term"
        defaultValue={searchParams.get('term') || ''}
      />
    </form>
  );
}
