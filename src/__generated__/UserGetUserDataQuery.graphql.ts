/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserGetUserDataQueryVariables = {
    userId: string;
};
export type UserGetUserDataQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly name: string | null;
    } | null;
};
export type UserGetUserDataQuery = {
    readonly response: UserGetUserDataQueryResponse;
    readonly variables: UserGetUserDataQueryVariables;
};



/*
query UserGetUserDataQuery(
  $userId: ID!
) {
  user(id: $userId) {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "userId"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserGetUserDataQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserGetUserDataQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e581e4c7292f05e464f983e7641f237a",
    "id": null,
    "metadata": {},
    "name": "UserGetUserDataQuery",
    "operationKind": "query",
    "text": "query UserGetUserDataQuery(\n  $userId: ID!\n) {\n  user(id: $userId) {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '91a810d879bebdbaf9a71b23703a91ae';
export default node;
