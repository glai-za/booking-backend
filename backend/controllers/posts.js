import User from '../models/User.js';
import Post from '../models/Post.js';

export const createPost = async (req, res) => {
  try {
    const {
      appointmentDate,
      appointmentTime,
      petName,
      petBreed,
      petAge,
    } = req.body;
    const { _id } = User(req.params);
    const user = await User.findById(_id);
    const newPost = new Post({
      appointmentDate,
      appointmentTime,
      petName,
      petBreed,
      petAge,
    });
    await newPost.save();

    const post = await Post.find();

    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getUserPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await User.findById(id);
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const postUpdate = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(postUpdate);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await User.deleteOne({ id });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
