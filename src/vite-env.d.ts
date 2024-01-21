/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_GRAPHQL_AUTHORIZATION: string
  readonly VITE_APP_HASURA_ADMIN_SECRET: string
  readonly VITE_APP_BE_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
