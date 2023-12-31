import { Schema, Types, model } from "mongoose";

const postModel = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    thumbnail: {
      type: String,
      required: true
    },
    category: {
      type: Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true
    }
  },
  {
    timestamps: true,
  }
);

export const post = model("Post", postModel);
