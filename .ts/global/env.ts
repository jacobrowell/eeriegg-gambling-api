require("dotenv").config();

const NODE_ENV = process.env.NODE_ENV;
const IS_PRODUCTION = NODE_ENV === "production";
const IS_TEST = NODE_ENV === "test";
const IS_DEVELOPMENT = NODE_ENV === "development";
const BLOCK_CYPHER_CHAIN = process.env.BLOCK_CYPHER_CHAIN;
const BLOCK_CYPHER_TOKEN = process.env.BLOCK_CYPHER_TOKEN;
const PORT = process.env.PORT;
const REDIS_PORT = Number(process.env.REDIS_PORT);
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
const PUBLIC_URL_CLIENT = process.env.PUBLIC_URL_CLIENT;
const NGROK_URL = process.env.NGROK_URL;

if (IS_DEVELOPMENT && !PORT) {
  throw new Error("PORT not defined in .env");
}

if (IS_DEVELOPMENT && !NGROK_URL) {
  throw new Error("NGROK_URL not defined in .env");
}

const PUBLIC_URL = IS_PRODUCTION
  ? process.env.PUBLIC_URL
  : `http://localhost:${PORT}`;

export {
  NODE_ENV,
  PORT,
  PUBLIC_URL,
  IS_PRODUCTION,
  IS_DEVELOPMENT,
  IS_TEST,
  BLOCK_CYPHER_CHAIN,
  BLOCK_CYPHER_TOKEN,
  NGROK_URL,
  PUBLIC_URL_CLIENT,
  REDIS_PORT,
  REDIS_HOST,
  REDIS_PASSWORD,
};
