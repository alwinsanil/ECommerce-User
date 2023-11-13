/* eslint-disable @next/next/no-img-element */
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`
  border-color: black;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Box = styled(Link)`
  background-color: white;
  padding: 20px;
  height: 200px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  img {
    max-width: 100%;
    max-height: 200px;
  }
`;
const Title = styled(Link)`
  font-weight: none;
  font-size: 1rem;
  color: black;
  margin: 0;
  text-align: left;
  text-decoration: none;
`;
const ProdInfoBox = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
`;
const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PriceStyle = styled.div`
  position: relative;
  top: 5px;
  font-weight: 600;
  font-size: large;
`;
export default function ProductBox({ _id, title, description, price, images }) {
  const url = "/product/" + _id;
  const { addProducts } = useContext(CartContext);
  return (
    <ProductWrapper>
      <Box href={url}>
        <div>
          <img src={images[0]} fill={true} alt="" />
        </div>
      </Box>
      <ProdInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <PriceStyle>${price}</PriceStyle>
          <Button onClick={() => addProducts(_id)} primary>
            <FaShoppingCart />
          </Button>
        </PriceRow>
      </ProdInfoBox>
    </ProductWrapper>
  );
}
