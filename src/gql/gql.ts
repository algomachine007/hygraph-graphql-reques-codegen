/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n    query blogPosts {\n      blogModels {\n        createdAt\n        id\n        publishedAt\n        slug\n        subtitle\n        title\n        updatedAt\n      }\n    }\n  ": types.BlogPostsDocument,
    "\n    query Sidebars {\n      sidebars {\n        title\n        slug\n        icon {\n          url\n        }\n      }\n    }\n  ": types.SidebarsDocument,
    "\n    query Hero($title: String!) {\n      heroes(where: { title: $title }) {\n        title\n        description {\n          html\n        }\n        cta {\n          text\n          icon {\n            id\n          }\n        }\n      }\n    }\n  ": types.HeroDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query blogPosts {\n      blogModels {\n        createdAt\n        id\n        publishedAt\n        slug\n        subtitle\n        title\n        updatedAt\n      }\n    }\n  "): (typeof documents)["\n    query blogPosts {\n      blogModels {\n        createdAt\n        id\n        publishedAt\n        slug\n        subtitle\n        title\n        updatedAt\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Sidebars {\n      sidebars {\n        title\n        slug\n        icon {\n          url\n        }\n      }\n    }\n  "): (typeof documents)["\n    query Sidebars {\n      sidebars {\n        title\n        slug\n        icon {\n          url\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Hero($title: String!) {\n      heroes(where: { title: $title }) {\n        title\n        description {\n          html\n        }\n        cta {\n          text\n          icon {\n            id\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query Hero($title: String!) {\n      heroes(where: { title: $title }) {\n        title\n        description {\n          html\n        }\n        cta {\n          text\n          icon {\n            id\n          }\n        }\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;