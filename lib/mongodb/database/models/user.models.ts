import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: "string",
    required: true,
    unique: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  username: {
    type: "string",
    required: true,
    unique: true,
  },
  firstName: {
    type: "string",
    required: true,
  },
  lastName: {
    type: "string",
    required: true,
  },
  photo: {
    type: "string",
    required: true,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
