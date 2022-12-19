import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    appointmentDate: {
      type: String,
      required: true,
    },
    appointmentTime: {
      type: String,
      required: true,
    },
    petName: {
      type: String,
      required: true,
    },
    petBreed: {
      type: String,
      required: true,
    },
    petAge: {
      type: String,
      required: true,
    },
    userId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"}]
   },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);
export default Post;
