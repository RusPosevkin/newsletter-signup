import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import GlobalStyle from "@/components/globalstyles";
import { theme } from "@/configs";
import Alert from "@/components/Alert";
import ReduxProvider from "@/store/reduxProvider";

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <ReduxProvider>
            <GlobalStyle />
            <Alert />
            <Component {...pageProps} />
          </ReduxProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
