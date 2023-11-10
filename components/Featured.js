import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import { FaShoppingCart, FaPlusSquare } from "react-icons/fa";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
  /* @media screen and (min-width: 768px) {
    font-size: 3rem;
  } */
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
const ButtonItems = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>Pro Anywhere.</Title>
              <Desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
                netus et malesuada fames ac turpis.
              </Desc>
              <ButtonsWrapper>
                <Button white size="l">
                  <ButtonItems>
                    <FaPlusSquare />
                    Read More
                  </ButtonItems>
                </Button>
                <Button icongap primary size="l">
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
