import { Button } from "@nextui-org/react";

import * as actions from '@/actions';
import { auth } from '@/auth';

// import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      {/**
       * 
       * quando si accede a session direttamente da auth
       * si ottinene un oggetto session || null con i dati al primo livello
       * 
      */}
      <p>Server: {session?.user ? JSON.stringify(session.user) : 'utente non loggato'}</p>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
      {/* <Profile /> */}
    </div>
  );
}
