import { Shcema, Types, model } from "mongoose";

const caixaSchema = new Schema({
  products: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  payment: {
    type: Schema.Types.ObjectId,
    ref: "PaymentType",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default model("Caixa", caixaSchema);
