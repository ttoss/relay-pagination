import * as React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { Heading } from 'theme-ui';

import { UserGetUserDataQuery } from './__generated__/UserGetUserDataQuery.graphql';

const User = () => {
  const { user } = useLazyLoadQuery<UserGetUserDataQuery>(
    graphql`
      query UserGetUserDataQuery($userId: ID!) {
        user(id: $userId) {
          id
          name
        }
      }
    `,
    { userId: 'user1' }
  );

  if (!user) {
    throw new Error('Cannot load user ;/');
  }

  return (
    <div>
      <Heading as="h3" sx={{ fontSize: 5 }}>
        {user.name}
      </Heading>
    </div>
  );
};

export default User;
