import { Schema, model } from "mongoose";

const paymentTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default model("PaymentType", paymentTypeSchema);
