'use client';

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  /**
    * 
    * quando si accede a session da useSession
    * si ottinene un oggetto session con i dati utente
    * wrappati in data || null
    * 
  */

  return (
    <div>Client: {session.data?.user ? JSON.stringify(session.data.user) : 'utente non loggato'}</div>
  );
}
