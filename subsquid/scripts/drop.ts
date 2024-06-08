import { DataSource } from "typeorm";
import "dotenv/config";

const db = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
});

const DB_NAME = process.env.DB_NAME;

if (!DB_NAME) {
  throw new Error("DN_NAME is not set");
}

async function main() {
  await db.initialize();

  await db.query(`DROP DATABASE ${DB_NAME};`);
  await db.query(`CREATE DATABASE ${DB_NAME};`);

  await db.destroy();
}

main().catch(console.error);
