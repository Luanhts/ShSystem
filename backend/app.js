import express from "express";
import connectDb from "./config/db.js";
import caixaRouter from "./routes/caixaRouter.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";

connectDb();

const app = express();

app.use(express.json());

app.use("/caixa", caixaRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(3000, () => console.log("Server running on port 3000"));
