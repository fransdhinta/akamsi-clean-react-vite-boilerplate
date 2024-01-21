import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  generates: {
    "providers/graphql/codegen/__generated__/schema-backend.ts": {
      overwrite: true,
      schema: "providers/graphql/codegen/schema-backend.graphql",
      documents: [
        "providers/graphql/codegen/queries-backend/**/*.query.gql",
        "providers/graphql/codegen/queries-backend/**/*.mutation.gql",
      ],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    }
  },
}

export default config
