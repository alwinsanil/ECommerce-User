/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import { BsCreditCardFill } from "react-icons/bs";
import { BiSolidMinusSquare, BiSolidPlusSquare } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Input from "@/components/Input";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
`;
const Box = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
  margin-top: 40px;
`;
const ButtonItems = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 0 5px;
`;
const ItemBox = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 5px;
  border-radius: 10px;
`;
const ImageBox = styled.div`
  border-radius: 5px;
  width: 100px;
  height: 100px;
  overflow: hidden;
  img {
    max-width: 100%;
    max-height: 200px;
  }
`;
const ProductInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  justify-content: space-between;
`;
const Styledh4 = styled.h4`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding-right: 20px;
`;
const QtyStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const QtyButton = styled.button`
  background-color: transparent;
  border: none;
`;
const CityStyle = styled.div`
  display: flex;
  gap: 5px;
`;

export default function CartPage() {
  const { cartProducts, addProducts, removeProducts, removeAll } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("success")) {
      setIsSuccess(true);
    }
  }, []);
  useEffect(() => {
    if (!!cartProducts.length) {
      axios
        .post("/api/cart", { ids: cartProducts })
        .then((response) => setProducts(response.data));
    }
  }, [cartProducts]);
  let total = 0;
  for (const productId of cartProducts) {
    console.log(products);
    const product = products.find((product) => product._id === productId);
    if (product) {
      total += product.price;
    }
  }
  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });
    console.log(response.data.url);
    if (response.data.url) {
      window.location = response.data.url;
    }
  }
  if (isSuccess) {
    if (window.location.href.includes("success")) {
      removeAll();
      return (
        <>
          <Header />
          <Center>
            <Box>
              <h1>Payment Successful.</h1>
              <p>
                Your order has been placed successfully. Details will be send to
                your email.
              </p>
            </Box>
          </Center>
        </>
      );
    }
  }

  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            {!cartProducts?.length && (
              <h2 style={{ textAlign: "center" }}>Your cart is empty.</h2>
            )}
            {!!cartProducts?.length && (
              <>
                <h2>Cart</h2>
                {products.map((product) => (
                  <ItemBox key={product._id}>
                    <ImageBox>
                      <img src={product.images[0]} alt="" />
                    </ImageBox>
                    <ProductInfo>
                      <div>
                        <h3>{product.title}</h3>
                        <h4>
                          Total Price: $
                          {product.price *
                            cartProducts.filter((id) => id === product._id)
                              ?.length}
                        </h4>
                      </div>
                      <Styledh4>
                        Quantity
                        <QtyStyle>
                          <QtyButton
                            onClick={() => removeProducts(product._id)}
                          >
                            <BiSolidMinusSquare size="1.5rem" />
                          </QtyButton>
                          {
                            cartProducts.filter((id) => id === product._id)
                              ?.length
                          }
                          <QtyButton onClick={() => addProducts(product._id)}>
                            <BiSolidPlusSquare size="1.5rem" />
                          </QtyButton>
                        </QtyStyle>
                      </Styledh4>
                    </ProductInfo>
                  </ItemBox>
                ))}
              </>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Review Order</h2>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Street Address"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <CityStyle>
                <Input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </CityStyle>
              <Input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <input
                type="hidden"
                name="products"
                value={cartProducts.join(",")}
              />
              <h4>Subtotal: ${total}</h4>
              <Button primary onClick={goToPayment}>
                <ButtonItems>
                  <BsCreditCardFill />
                  Continue to Payment
                </ButtonItems>
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
