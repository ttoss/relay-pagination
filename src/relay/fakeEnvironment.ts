import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from 'relay-runtime';

const getPostsConnection = ({
  first = 3,
  after,
  last,
  before,
}: {
  first: number;
  after?: string;
  last?: number;
  before?: string;
}) => {
  const posts = [...new Array(first || last)].map((_, index) => {
    let id = '';
    if (last) {
      id = `${(index + Number(before || 0) - last).toString()}`;
    } else {
      id = `${(index + Number(after || 0) + 1).toString()}`;
    }
    return {
      id,
      title: `Post Title ${id}`,
      description: `Post description ${id}`,
      __typename: 'Post',
    };
  });

  return {
    ctx: '{}',
    pageInfo: {
      hasNextPage: !after || Number(after) < 15,
      hasPreviousPage: !before || Number(before) > -15,
      startCursor: posts[0].id,
      endCursor: posts[posts.length - 1].id,
      __typename: 'PageInfo',
    },
    edges: posts.map((post) => ({
      cursor: post.id,
      node: post,
      __typename: 'PostEdge',
    })),
  };
};

const fetchQuery: FetchFunction = async (operation, variables) => {
  let data = {};

  const { name } = operation;

  if (name === 'UserGetUserDataQuery') {
    data = {
      user: {
        id: variables.userId,
        name: 'Pedro',
        posts: getPostsConnection(variables as any),
        __typename: 'User',
      },
    };
  }

  if (name === 'UserPostsPaginationQuery') {
    data = {
      node: {
        id: variables.id,
        name: 'Pedro',
        posts: getPostsConnection(variables as any),
        __typename: 'User',
      },
    };
  }

  console.log({ data, operation, variables });

  return Promise.resolve({ data });
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
