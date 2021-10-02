import { Connection, createConnection, ConnectionOptions } from "typeorm";
import { getConfig } from "../../config";
import { Account, Record } from "..";

export type DBconnection = Connection;

const { database } = getConfig();

const databaseName = database.name;
const password = database.password;
const port = parseInt(database.port, 10) || 5432;
const username = database.username;
const url =
  database.url ||
  `postgres://${username}:${password}@localhost:${port}/${databaseName}`;

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  url: url,
  synchronize: true,
  logging: true,
  entities: [Account, Record],
} as ConnectionOptions;

export const initializeDatabase = async (): Promise<DBconnection> => {
  const connection = await createConnection(connectionOptions);
  return connection;
};

export default initializeDatabase;
