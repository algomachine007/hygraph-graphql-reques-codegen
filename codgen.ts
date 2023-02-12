import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    "https://api-us-west-2.hygraph.com/v2/cldyn51uj1iws01t2dvjb4rm3/master",
  ],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      documents: ["src/**/*.tsx"],
      preset: "client",

      plugins: [],
      config: {
        fetcher: "graphql-request",
      },
    },
  },
};

export default config;
