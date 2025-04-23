import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  }));

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes

// routes import
import userRouter from './routes/user.route.js'
import orderRouter from './routes/order.route.js'
import productRouter from './routes/product.route.js'
import cartRouter from './routes/cart.route.js'


//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/orders", orderRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/cart", cartRouter)

export {app} 