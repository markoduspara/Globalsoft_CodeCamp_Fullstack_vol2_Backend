import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '.env') });

const DataSourceConfig = new DataSource({
  type: 'mysql',
  host: 'fullstack-db', //process.env.DB_HOST,
  port: 3306, //Number(process.env.DB_PORT),
  username: 'user', //process.env.MEST_NEW_USER,
  password: 'password', //process.env.MEST_NEW_PASSWORD,
  database: 'db', //process.env.MEST_NEW_DATABASE,
  migrations: ['./src/migrations/*'],
  synchronize: false,
  migrationsTableName: 'migrations',
});

export default DataSourceConfig;
