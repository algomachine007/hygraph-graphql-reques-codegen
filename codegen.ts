import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api-us-west-2.hygraph.com/v2/cldyn51uj1iws01t2dvjb4rm3/master",
  documents: "src/**/*.tsx",
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
