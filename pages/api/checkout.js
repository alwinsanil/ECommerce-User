import mongooseConnect from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

export default async function handle(req, res) {
  if (req.method !== "POST") {
    res.json("Should be POST request");
  }
  await mongooseConnect();
  const {
    name,
    email,
    streetAddress,
    city,
    postalCode,
    country,
    cartProducts,
  } = req.body;
  const productIds = cartProducts;
  const uniqueIds = [...new Set(productIds)];
  const productInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productInfos.find(
      (p) => p._id.toString() === productId
    );
    const quantity = productIds.filter((id) => id === productId).length;
    if (!productInfo || !quantity) continue;
    line_items.push({
      quantity,
      price_data: {
        currency: "usd",
        product_data: { name: productInfo.title },
        unit_amount: productInfo.price * quantity * 100,
      },
    });
  }

  const OrderDoc = await Order.create({
    line_items,
    name,
    email,
    streetAddress,
    city,
    postalCode,
    country,
    paid: false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email,
    success_url: process.env.PUBLIC_URL + "/cart?success=1",
    cancel_url: process.env.PUBLIC_URL + "/cart?canceled=1",
    metadata: { orderId: OrderDoc._id.toString(), test:'ok' },
  });

  res.json({ url: session.url });
}
