import { getServerSession } from 'next-auth';
import React from 'react';

import { options } from '@/utils/nextauth/option';

async function getData(userId: string) {
  // ...Logic Filtering Database
  return userId;
}

export default async function Page() {
  const session = await getServerSession(options);
  const data = await getData(session?.user?.id as string);
  console.log(data);
  return (
    <div>Page</div>
  );
}
