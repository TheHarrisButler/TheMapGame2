type Config = {
  database: {
    name: string;
    password: string;
    port: string;
    username: string;
    url?: string;
  };
};

export const getConfig = (): Config => {
  return {
    database: {
      name: process.env.DATABASE_NAME!,
      password: process.env.DATABASE_PASSWORD!,
      port: process.env.DATABASE_PORT!,
      username: process.env.DATABASE_USERNAME!,
      url: process.env.DATABASE_URL,
    },
  };
};
