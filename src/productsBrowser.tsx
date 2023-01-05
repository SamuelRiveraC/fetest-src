import React from "react";
import AppContext from "./context";
import ProductTile from "./productTile";

import type { IProduct } from "./productTile";

export default () => {
  const { products } = React.useContext<{ products: IProduct[] }>(AppContext);
  return (
    <div className="products-browser">
      {products.map((product) => (
        <ProductTile key={product.name} product={product} />
      ))}
    </div>
  );
};
