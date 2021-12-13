import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './app/Apollo.client';
import App from './app/app';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <StrictMode>
      <App/>
    </StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
