import React from 'react'
import { useAuth } from 'react-oidc-context';

interface Props {
    
}

const Login = (props: Props) => {
    const auth = useAuth();
    if (auth.isLoading) {
      return <div>Loading...</div>;
    }

    if (auth.error) {
      return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
      return (
        <div>
          Hello {auth.user?.profile.sub}{" "}
          <button onClick={auth.removeUser}>Log out</button>
        </div>
      );
    }

    return <button onClick={auth.signinRedirect}>Log in</button>;
}

export default Login
