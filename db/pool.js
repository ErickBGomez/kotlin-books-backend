import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;
const { DATABASE_URL } = process.env.DATABASE_URL;

export default new Pool({
  connectionString: DATABASE_URL,
});
