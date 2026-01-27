import React from "react";

import coffeTree from "../assets/img/Rectangle299.png";

function Products() {
  return (
    <>
      <section>
        <div className='w-full relative mb-12 bg-cover bg-center bg-no-repeat'>
          <img
            src={coffeTree}
            alt='background coffe image'
            className='w-full'
          />
          <h1 className='absolute inset-0 flex items-center justify-center font-[Plus_Jakarta_Sans] text-white font-medium text-5xl top-[92px] left-[130px] '>
            We Provide Good Coffee and Healthy Meals
          </h1>
        </div>
      </section>
    </>
  );
}

export default Products;
