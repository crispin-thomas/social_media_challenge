const usersSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["userId", "email", "password"],
    properties: {
      userId: {
        bsonType: "int",
        description: "must be a int and is required",
      },
      id: {
        bsonType: "int",
        description: "must be a int and is required",
      },
      postId: {
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

const usersCollection = { name: "users", schema: usersSchema };

export default usersCollection;
