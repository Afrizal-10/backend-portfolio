import mongoose from "mongoose";

const TestimoniSchema = new mongoose.Schema(
  {
    name: String,
    message: String,
  },
  {timestamps: true}
);

export default mongoose.model("Testimoni", TestimoniSchema);
