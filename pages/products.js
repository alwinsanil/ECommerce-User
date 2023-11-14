import Center from "@/components/Center";
import Header from "@/components/Header";
import { ProductsGrid } from "@/components/NewProducts";
import ProductBox from "@/components/ProductBox";
import mongooseConnect from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function ProductsPage({ products }) {
  return (
    <>
      <Header active="products" />
      <Center>
        <h1>All Products</h1>
        <ProductsGrid>
          {products &&
            products.map((p) => <ProductBox {...p} key={p._id} />)}
        </ProductsGrid>
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { updatedAt: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
