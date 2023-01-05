import React from "react";
import HeaderBar from "./HeaderBar";
import ShoppingCart from "./shoppingCart";
import ProductsBrowser from "./productsBrowser";
import { AppContextProvider } from "./context";

const AppView = () => {
  return (
    <AppContextProvider>
      <HeaderBar />
      <div className="app-content">
        <ProductsBrowser />
        <ShoppingCart />
      </div>
    </AppContextProvider>
  );
};
export default AppView;
