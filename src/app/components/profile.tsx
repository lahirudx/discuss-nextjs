'use client';

import { useSession } from "next-auth/react";

function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>Clint: {JSON.stringify(session.data?.user)}</div>;
  }

  return (
    <div>Clint: Not Signed In</div>
  )
}

export default Profile