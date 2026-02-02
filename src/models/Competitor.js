import mongoose from "mongoose";

const competitorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    website: String,
    industry: String,
    pricingModel: String,
    features: [String],
    techStack: [String],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Competitor", competitorSchema);
