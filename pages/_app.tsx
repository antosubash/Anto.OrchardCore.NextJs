import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from "react-oidc-context";
import { ApolloProvider } from "@apollo/client";
import client from '../lib/apollo-client';
function MyApp({ Component, pageProps }: AppProps) {
  const oidcConfig = {
    authority: "https://localhost:5001",
    client_id: "client1",
    redirect_uri: "http://localhost:3000",
    response_type: "code",
    scopes: "openid email"
  };
  return (
    <AuthProvider {...oidcConfig}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthProvider>
  );
}

export default MyApp
