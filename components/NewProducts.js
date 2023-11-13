import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 0rem;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 2rem;
  margin-top: 2rem;
`;

export default function NewProducts({ newProducts }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid>
        {newProducts &&
          newProducts.map((p) => <ProductBox {...p} key={p._id} />)}
      </ProductsGrid>
    </Center>
  );
}
