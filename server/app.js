import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import cors from 'cors';
import Stripe from 'stripe';

app.use(express.json());
app.use(cors());



if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/e-store/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "/e-store/dist/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });

}
const stripe = new Stripe(process.env.STRIPE_SECRET);
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});
// checkout api
app.post("/api/create-checkout-session",async(req,res)=>{
    const {products} = req.body;


    const lineItems = products.map((product)=>({
        price_data:{
            currency:"usd",
            product_data:{
                name:product.title,
                images:[product.images[0]]
            },
            unit_amount:product.price,
        },
        quantity:product.quantity
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:5173/sucess",
        cancel_url:"http://localhost:5173/cancel",
    });

    res.json({id:session.id})
 
})


app.listen(3000,()=>{
    console.log("server start")
})
