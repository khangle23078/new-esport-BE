import { post } from "../models/post.model"

export const getAll = (page, perPage) => {
  return post.find().skip((page - 1) * perPage).limit(perPage)
    .populate('category', 'name')
    .populate('user', 'email')
    .exec()
}

export const insertOne = (data) => {
  return post.create(data)
}