const postsSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["userId", "id", "body"],
    properties: {
      userId: {
        bsonType: "int",
        description: "must be a int and is required",
      },
      id: {
        bsonType: "int",
        description: "must be a int and is required",
      },
      body: {
        bsonType: "string",
        description: "must be a string and is required",
      },
    },
  },
};

const postsCollection = { name: "posts", schema: postsSchema };

export default postsCollection;
