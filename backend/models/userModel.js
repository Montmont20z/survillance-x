import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'User' 
  }
);

export const User = mongoose.model('User', userSchema);
