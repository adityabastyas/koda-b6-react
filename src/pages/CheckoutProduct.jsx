import React from "react";
import CartOrder from "../components/CartOrder";

function CheckoutProduct() {
  return (
    <>
      <div>
        <div>
          <CartOrder
            src='src/assets/img/image-31.png'
            alt='Hazelnut Latte coffe'
            title='Hazelnut Latte'
            quantity='2pcs'
            size='Regular'
            temperature='Ice'
            dineOption='Dine In'
            originalPrice='IDR 40.000'
            discountPrice='IDR 20.000'
          />
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
