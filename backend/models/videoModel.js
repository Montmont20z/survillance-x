import mongoose from 'mongoose';

const videoSchema = mongoose.Schema(
  {
    cam: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    }
  },
  {
    collection: 'Video' 
  }
);

export const Video = mongoose.model('Video', videoSchema);
