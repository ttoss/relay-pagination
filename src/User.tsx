import * as React from 'react';

import { graphql } from 'babel-plugin-relay/macro';
import { useLazyLoadQuery, usePaginationFragment } from 'react-relay/hooks';
import { Box, Button, Flex, Heading, Styled } from 'theme-ui';

import { UserGetUserDataQuery } from './__generated__/UserGetUserDataQuery.graphql';

const UserPosts = ({ user }: any) => {
  const {
    data,
    hasNext,
    loadNext,
    isLoadingNext,
    hasPrevious,
    loadPrevious,
    isLoadingPrevious,
  } = usePaginationFragment(
    graphql`
      fragment User_posts on User
      @argumentDefinitions(
        first: { type: "Int" }
        after: { type: "String" }
        last: { type: "Int" }
        before: { type: "String" }
      )
      @refetchable(queryName: "UserPostsPaginationQuery") {
        posts(first: $first, after: $after, last: $last, before: $before)
          @connection(key: "User_posts_postsConnection") {
          edges {
            node {
              id
              title
              description
            }
          }
        }
      }
    `,
    user
  );

  const isPreviousDisabled = isLoadingPrevious || !hasPrevious;
  const isNextDisabled = isLoadingNext || !hasNext;

  return (
    <>
      <Flex sx={{ justifyContent: 'center', marginY: 3 }}>
        <Button
          type="button"
          disabled={isPreviousDisabled}
          onClick={() => loadPrevious(4)}
          backgroundColor={isPreviousDisabled ? 'gray' : ''}
          marginX={2}
        >
          {isLoadingPrevious ? 'Loading...' : 'Load Previous'}
        </Button>
        <Button
          type="button"
          disabled={isNextDisabled}
          onClick={() => loadNext(4)}
          backgroundColor={isNextDisabled ? 'gray' : ''}
        >
          {isLoadingNext ? 'Loading...' : 'Load Next'}
        </Button>
      </Flex>
      <Box sx={{ height: '600px', overflowY: 'scroll' }}>
        <Styled.pre>{JSON.stringify(data, null, 2)}</Styled.pre>
      </Box>
    </>
  );
};

const User = () => {
  const { user } = useLazyLoadQuery<UserGetUserDataQuery>(
    graphql`
      query UserGetUserDataQuery($userId: ID!) {
        user(id: $userId) {
          id
          name
          ...User_posts
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
        User Name: {user.name}
      </Heading>
      <UserPosts user={user} />
    </div>
  );
};

export default User;
