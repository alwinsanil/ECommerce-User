/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import { FaShoppingCart, FaPlusSquare } from "react-icons/fa";
import ButtonLink from "./ButtonLink";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 1rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  img {
    max-width: 100%;
    background-color: #222;
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
`;
export const ButtonItems = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function Featured({ product }) {
  const { addProducts } = useContext(CartContext);
  function addFeaturedToCart() {
    addProducts(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonsWrapper>
                <ButtonLink
                  href={"/products/" + product._id}
                  white={1}
                  size="l"
                >
                  <ButtonItems>
                    <FaPlusSquare />
                    Read More
                  </ButtonItems>
                </ButtonLink>
                <Button
                  onClick={() => addFeaturedToCart()}
                  primary={1}
                  size="l"
                >
                  <ButtonItems>
                    <FaShoppingCart />
                    Add to Cart
                  </ButtonItems>
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img
              src="https://alwin-ecommerce.s3.amazonaws.com/1699602100358.png"
              alt=""
            />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
