import mongoose, { Document, Schema } from "mongoose";

export interface ICard extends Document {
  title: string;
  description: string;
  link: string;
  createdAt: Date;
}

const CardSchema: Schema = new Schema({
  title: String,
  description: String,
  link: String,
  createdAt: { type: Date, default: Date.now },
});

CardSchema.index({ title: "text", description: "text" });

export const Card = mongoose.model<ICard>("Card", CardSchema);
