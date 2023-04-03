const commentsSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["userId", "postId", "id", "body"],
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

const commentsCollection = { name: "comments", schema: commentsSchema };

export default commentsCollection;
