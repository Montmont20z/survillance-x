import mongoose from 'mongoose';

const infraredSchema = mongoose.Schema(
  {
    area: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    collection: 'Infrared' 
  }
);

export const Infrared = mongoose.model('Infrared', infraredSchema);
