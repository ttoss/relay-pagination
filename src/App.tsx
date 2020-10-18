import * as React from 'react';

import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { Button, Container, Styled } from 'theme-ui';

import Header from './Header';
import User from './User';

import RelayFakeEnvironment from './relay/fakeEnvironment';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <Styled.pre>{error?.message}</Styled.pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
};

const App = () => {
  return (
    <RelayEnvironmentProvider environment={RelayFakeEnvironment}>
      <Container sx={{ maxWidth: '40em' }}>
        <Header />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <React.Suspense fallback="loading...">
            <User />
          </React.Suspense>
        </ErrorBoundary>
      </Container>
    </RelayEnvironmentProvider>
  );
};

export default App;
