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

      <main>
        <form className='w-[350px] rounded-2xl bg-[#0b0909] p-6 text-white'>
          <header className='flex items-center justify-between'>
            <h4 className='text-[22px] font-semibold'>Filter</h4>
            <button
              type='reset'
              className='bg-transparent cursor-pointer text-lg font-bold text-white'
            >
              Reset Filter
            </button>
          </header>

          <section className='mt-4'>
            <h5 className='text-lg font-bold'>Search</h5>
            <input
              type='text'
              placeholder='Search Your Product'
              className='mt-2 mb-4 w-full border-4 bg-amber-50 border-[#dedede] px-5 text-black outline-none'
            />
          </section>

          <section>
            <h5 className='mb-4 text-lg font-bold'>Category</h5>

            <div className='mb-4 flex items-center gap-2 text-lg'>
              <input type='checkbox' id='fav' className='accent-[#ff8906]' />
              <label htmlFor='fav'>Favorite Product</label>
            </div>

            <div className='mb-4 flex items-center gap-2 text-lg'>
              <input type='checkbox' id='coffee' className='accent-[#ff8906]' />
              <label htmlFor='coffee'>Coffee</label>
            </div>

            <div className='mb-4 flex items-center gap-2 text-lg'>
              <input
                type='checkbox'
                id='noncoffee'
                className='accent-[#ff8906]'
              />
              <label htmlFor='noncoffee'>Non Coffee</label>
            </div>

            <div className='mb-4 flex items-center gap-2 text-lg'>
              <input type='checkbox' id='foods' className='accent-[#ff8906]' />
              <label htmlFor='foods'>Foods</label>
            </div>

            <div className='mb-4 flex items-center gap-2 text-lg'>
              <input type='checkbox' id='addon' className='accent-[#ff8906]' />
              <label htmlFor='addon'>Add-On</label>
            </div>
          </section>

          <section>
            <h5 className='mb-4 text-lg font-bold'>Sort by</h5>

            <div className='mb-4 flex items-center gap-2 text-lg'>
              <input
                type='checkbox'
                id='buy1get1'
                className='accent-[#ff8906]'
              />
              <label htmlFor='buy1get1'>Buy 1 get 1</label>
            </div>

            <div className='mb-4 flex items-center gap-2 text-lg'>
              <input
                type='checkbox'
                id='flashsale'
                className='accent-[#ff8906]'
              />
              <label htmlFor='flashsale'>Flash sale</label>
            </div>

            <div className='mb-4 flex items-center gap-2 text-lg'>
              <input
                type='checkbox'
                id='birthday'
                className='accent-[#ff8906]'
              />
              <label htmlFor='birthday'>Birthday Package</label>
            </div>

            <div className='mb-4 flex items-center gap-2 text-lg'>
              <input type='checkbox' id='cheap' className='accent-[#ff8906]' />
              <label htmlFor='cheap'>Cheap</label>
            </div>
          </section>

          <section>
            <h5 className='mb-4 text-lg font-bold'>Range Price</h5>

            <input
              type='range'
              min='0'
              max='100'
              defaultValue='50'
              className='w-full accent-[#ff8906]'
            />

            <div className='mt-2 flex justify-between text-sm'>
              <span>idr 374</span>
              <span>idr 500</span>
            </div>
          </section>

          <button
            type='submit'
            className='mt-2 w-full rounded bg-[#ff8906] py-3 text-[14px] font-medium text-[#0b0909]'
          >
            Apply Filter
          </button>
        </form>
      </main>
    </>
  );
}

export default Products;
