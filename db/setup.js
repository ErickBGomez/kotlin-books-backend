import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const setup = async () => {
  const { DATABASE_URL } = process.env;

  const client = new Client({
    connectionString: DATABASE_URL,
  });

  console.log("Setting up database...");

  await client.connect();

  await client.query(`CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title TEXT,
    author TEXT,
    pages NUMERIC
  )`);

  await client.query(
    `INSERT INTO books (title, author, pages) VALUES ('The Pragmatic Programmer', 'Andrew Hunt, David Thomas', 352)`
  );

  console.log("Database setup complete.");

  await client.end();
};

setup();
