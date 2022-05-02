module.exports = {
    development: {
        client: 'postgresql',
        connection: {
          host: '192.168.0.10',
          port: '5432',
          database: 'postgres',
          user:     'postgres',
          password: 'eJKt78rGGBKgbjV'
        },
        pool: {
          min: 2,
          max: 10
        },
        migrations: {
          tableName: 'knex_migrations'
        }
    },
    staging: {
      client: 'postgresql',
      connection: {
        database: '192.168.0.10:5432',
        user:     'postgres',
        password: 'eJKt78rGGBKgbjV'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
    production: {
      client: 'postgresql',
      connection: {
        database: '192.168.0.10:5432',
        user:     'postgres',
        password: 'eJKt78rGGBKgbjV'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  };