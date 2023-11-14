import Center from "@/components/Center";
import Header from "@/components/Header";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import PictureBox from "@/components/PictureBox";
import Button from "@/components/Button";
import { FaShoppingCart } from "react-icons/fa";
import { ButtonItems } from "@/components/Featured";
import { CartContext } from "@/components/CartContext";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 20px;
`;
const ProductInfo = styled.div`
  margin-top: 40px;
`;
const Box = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function ProductPage() {
  const { addProducts } = useContext(CartContext);
  const router = useRouter();
  const { id } = router.query;
  const [productInfo, setProductInfo] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.post("/api/product", { id }).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <ProductInfo>
            <h1>{productInfo?.title}</h1>
            <p>{productInfo?.description}</p>
            <br />
            <br />
            <h3>
              Price: <b>${productInfo?.price}</b>
            </h3>
            <Button onClick={() => addProducts(productInfo?._id)} primary size="l">
              <ButtonItems>
                <FaShoppingCart />
                Add to Cart
              </ButtonItems>
            </Button>
          </ProductInfo>
          <Box>
            <PictureBox images={productInfo?.images} />
          </Box>
        </ColumnsWrapper>
      </Center>
    </>
  );
}
