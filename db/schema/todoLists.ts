const todoListsSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["userId", "id", "title", "completed"],
    properties: {
      userId: {
        bsonType: "int",
        description: "must be a int and is required",
      },
      id: {
        bsonType: "int",
        description: "must be a int and is required",
      },
      title: {
        bsonType: "string",
        description: "must be a string and is required",
      },
      completed: {
        bsonType: "bool",
        description: "must be a bool and is required",
      },
    },
  },
};

const todoCollection = { name: "todos", schema: todoListsSchema };

export default todoCollection;
