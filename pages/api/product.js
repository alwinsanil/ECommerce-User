import { Product } from "@/models/Product";

export default async function handle(req, res) {
    const method = req.method;
    const {id} = req.body;
    if (method === 'POST') {
        res.json(await Product.findById({_id:id}))
    } else {
        res.json('Must be a POST request')
    }
}