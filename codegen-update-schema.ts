import type { CodegenConfig } from "@graphql-codegen/cli"

const schemaUrl = ""

const config: CodegenConfig = {
  config: {
    headers: {
      Authorization: "",
      "x-hasura-admin-secret": "",
    },
  },
  generates: {
    "./providers/graphql/codegen/schema-backend.graphql": {
      overwrite: true,
      schema: schemaUrl,
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
        commentDescriptions: true,
      },
    }
  },
}
export default config
