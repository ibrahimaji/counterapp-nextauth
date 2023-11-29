'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleCredentialsLogin = () => {
    signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/dashboard',
    });
  };
  const handleGithubLogin = () => {
    signIn('github');
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[300px] flex flex-col gap-3">
        <Input size="md" type="email" placeholder="enter your password" onChange={(e) => setEmail(e.target.value)} />
        <Input size="md" type="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleCredentialsLogin}>Login</Button>
        <Button variant="secondary" onClick={handleGithubLogin}>Continue with Github</Button>
      </div>
    </main>
  );
};
