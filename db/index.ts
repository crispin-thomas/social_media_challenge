import { socialMediaDb } from "../src/data-access";
import collections from "./schema";

(async function setupDb() {
  console.log("Setting up database...");
  // database collection will automatically be created if it does not exist
  // indexes will only be added if they don't exist
  const db = await socialMediaDb();

  const result = collections.map(({ name, schema }) => {
    return db.createCollection(name, { validator: schema });
  });

  await Promise.all(result).then(() => {
    console.log("Database setup complete...");
  });

  process.exit();
})();
