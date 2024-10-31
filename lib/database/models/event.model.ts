import { Document, model, models, Schema } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt?: Date;
  imageUrl: string;
  startDateTime?: Date;
  endDateTime?: Date;
  price?: string;
  isFree?: boolean;
  url?: string;
  category?: { _id: string; name: string };
  organiser?: { _id: string; firstName: string; lastName: string };
}

const EventSchema = new Schema({
  title: { type: "string", required: true },
  description: String,
  location: String,
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: "string", required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: String,
  isFree: { type: "boolean", default: false },
  url: { type: "string" },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organiser: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
