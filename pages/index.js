import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import mongooseConnect from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct}/>
      <NewProducts newProducts={newProducts}/>
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProuctId = "6548b535ca73fdeb0c50dd8d";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProuctId);
  const newProducts = await Product.find({}, null, {sort: {'updatedAt':-1}, limit:8})
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
