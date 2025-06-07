import { Button } from '@/components/ui/button';
import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost">Log in</Button>
      <Button variant="ghost">Basket</Button>
    </div>
  );
}

export default Login;
