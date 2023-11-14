import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import css from "styled-jsx/css";

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  font-size: x-large;
  text-decoration: none;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: gray;
  text-decoration: none;
  &:hover {
    color: white;
  }
  ${(props) =>
    props.white &&
    css`
      color: white;
    `}
`;

const Header = ({ active }) => {
  const { cartProducts } = useContext(CartContext);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>ECommerce</Logo>
          <StyledNav>
            {active === "" ? (
              <NavLink href="/" white={1}>
                Home
              </NavLink>
            ) : (
              <NavLink href={"/"}>Home</NavLink>
            )}
            {active === "products" ? (
              <NavLink href="/" white={1}>
                Products
              </NavLink>
            ) : (
              <NavLink href={"/products"}>Products</NavLink>
            )}
            {active === "categories" ? (
              <NavLink href="/" white={1}>
                Categories
              </NavLink>
            ) : (
              <NavLink href={"/categories"}>Categories</NavLink>
            )}
            {active === "account" ? (
              <NavLink href="/" white={1}>
                Account
              </NavLink>
            ) : (
              <NavLink href={"/account"}>Account</NavLink>
            )}
            {active === "cart" ? (
              <NavLink href="/" white={1}>
                Cart ({cartProducts.length})
              </NavLink>
            ) : (
              <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
            )}
          </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
};

export default Header;
