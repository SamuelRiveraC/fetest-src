/* eslint no-unused-vars: 0 */
import React from "react";
import productData from "./data";
import { IProduct } from "./productTile";

const Context = React.createContext<{ products: IProduct[] }>({
  products: [],
});

export const AppContextProvider = (props: any) => {
  const [products, setProducts] = React.useState(productData);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [totalCartPrice, setTotalCartPrice] = React.useState(0);

  const filterProductsByName = React.useCallback((name: string) => {}, []);
  const addProductToCart = React.useCallback((product: any) => {}, []);
  const removeProductFromCartAtIndex = React.useCallback((index: number) => {},
  []);

  React.useEffect(() => {
    setTotalCartPrice(0);
  }, [shoppingCart]);

  const providerValue = React.useMemo(
    () => ({
      products,
      shoppingCart,
      totalCartPrice,
      actions: {
        filterProductsByName,
        addProductToCart,
        removeProductFromCartAtIndex,
      },
    }),
    [
      products,
      shoppingCart,
      totalCartPrice,
      filterProductsByName,
      addProductToCart,
      removeProductFromCartAtIndex,
    ]
  );

  return (
    <Context.Provider value={providerValue}>{props.children}</Context.Provider>
  );
};
export default Context;
