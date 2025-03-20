import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { DATABASE_URL } = process.env.DATABASE_URL;

export default new Pool({
  connectionString: DATABASE_URL,
});
