import { Knex, knex as setupKnex } from 'knex'

import { env } from './env'

export const config: Knex.Config = {
  client: 'sqlite',
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
  connection: { filename: env.DATABASE_URL },
}

export const knex = setupKnex(config)
