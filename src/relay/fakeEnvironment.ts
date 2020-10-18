import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from 'relay-runtime';

const fetchQuery: FetchFunction = async (operation, variables) => {
  console.log({ operation, variables });

  let data = {};

  const { name } = operation;

  if (name === 'UserGetUserDataQuery') {
    data = { user: { id: variables.userId, name: 'Pedro' } };
  }

  return Promise.resolve({ data });
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default environment;
