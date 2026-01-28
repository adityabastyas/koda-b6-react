import React from "react";
import CartOrder from "../components/CartOrder";
import Input from "../components/Input";

function CheckoutProduct() {
  return (
    <>
      <div>
        <div>
          <section className='mt-9 px-5'>
            <h1 className='text-5xl font-semibold'>Payment Details</h1>

            <div className='flex justify-between mt-8 mb-4'>
              <span className='text-2xl font-medium'>Your Order</span>
              <span className='bg-[#ff8906] text-sm font-medium px-2.5 rounded-md cursor-pointer text-black'>
                + Add Menu
              </span>
            </div>

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
              isFlashSale={true}
            />

            <section className='mt-8 px-5'>
              <h2 className='text-lg font-semibold mb-4 text-[#0b132a]'>
                Payment & Info Delivery
              </h2>

              <form className='grid grid-cols-1 gap-4'>
                <Input
                  label='Email'
                  htmlFor='email'
                  id='email'
                  placeholder='Enter Your Email'
                  src='src/assets/img/icon/mail.svg'
                  alt='icon email'
                />
                <Input
                  htmlFor='fullName'
                  label='Full Name'
                  id='fullName'
                  placeholder='Enter Your Full Name'
                  src='./src/assets/img/icon/Profile.svg'
                  alt='icon profile'
                />
                <Input
                  htmlFor='address'
                  label='Address'
                  id='address'
                  placeholder='Enter Your Address'
                  src='./src/assets/img/icon/location.svg'
                  alt='icon location'
                />
                <label className='block  text-base font-semibold text-[#0b132a]'>
                  Delivery
                </label>

                <div className='flex justify-between '>
                  <button className='px-2.5 border rounded cursor-pointer'>
                    Dine in
                  </button>
                  <button className='px-2.5 border rounded cursor-pointer'>
                    Door Delivery
                  </button>
                  <button className='px-2.5 border rounded cursor-pointer'>
                    Pick Up
                  </button>
                </div>
              </form>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
