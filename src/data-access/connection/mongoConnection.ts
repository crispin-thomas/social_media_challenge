import { MongoClient } from "mongodb";
import {
  SOCIAL_MEDIA_DB_NAME,
  SOCIAL_MEDIA_DB_URL,
} from "../../__environment__";

// import collections from "./schema";

const socialMediaDb = async () => {
  try {
    const url = SOCIAL_MEDIA_DB_URL;
    const dbname = SOCIAL_MEDIA_DB_NAME;
    console.log(SOCIAL_MEDIA_DB_NAME, SOCIAL_MEDIA_DB_URL);

    const connection = new MongoClient(url);
    const client = await connection.connect();
    const db = client.db(dbname);

    // collections.forEach(({ name, schema }) => {
    //   db.createCollection(name, { validator: schema });
    // });

    return db;
  } catch (error) {
    throw error;
  }
};

export default socialMediaDb;
