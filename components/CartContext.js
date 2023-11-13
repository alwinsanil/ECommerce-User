import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!!cartProducts?.length) {
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    } else {
    }
  }, [cartProducts]);
  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, [ls]);
  function addProducts(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }
  function removeProducts(productId) {
    setCartProducts((prev) => {
      if (cartProducts.length === 1) {
        localStorage.removeItem("cart");
        setCartProducts([]);
        router.push('/cart');
      }
      const index = prev.indexOf(productId);
      
      if (index > -1) {
        const newArray = [...prev];
        newArray.splice(index, 1);
        return newArray;
      }
      return prev;
    });
  }

  return (
    <CartContext.Provider
      value={{ cartProducts, setCartProducts, addProducts, removeProducts }}
    >
      {children}
    </CartContext.Provider>
  );
}
