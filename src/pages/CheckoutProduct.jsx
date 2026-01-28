import React from "react";
import CartOrder from "../components/CartOrder";
import Input from "../components/Input";

function CheckoutProduct() {
  return (
    <>
      <div>
        <h1 className='text-5xl py-8 px-5 sm:px-5 md:px-32 font-semibold'>
          Payment Details
        </h1>
        <div className='grid grid-cols- sm:grid-cols-2 sm:px-5 md:px-32'>
          <section className=' px-5 sm:col-span-1 mb-5'>
            <div className='flex justify-between  mb-4'>
              <span className='text-2xl font-medium'>Your Order</span>
              <span className='bg-[#ff8906] text-sm font-medium px-2.5 rounded-md cursor-pointer text-black'>
                + Add Menu
              </span>
            </div>
            {/* {card menu} */}
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
              {/* {input form info customer and delevery} */}
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

                {/* {delevery} */}
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

          <section className=" px-5 sm:col-span-1 font-['Plus_Jakarta_Sans']">
            <h2 className='mb-7 text-[#0b132a] font-semibold'>Total</h2>

            <article className='bg-[#e8e8e84d] px-2.5 py-12 flex flex-col gap-5'>
              {/* Order */}
              <div className='flex justify-between'>
                <span className='text-sm font-bold text-[#4f5665]'>Order</span>
                <span className='text-sm font-bold text-[#0b132a]'>
                  Idr. 40.000
                </span>
              </div>

              {/* Delivery */}
              <div className='flex justify-between'>
                <span className='text-sm font-bold text-[#4f5665]'>
                  Delivery
                </span>
                <span className='text-sm font-bold text-[#0b132a]'>Idr. 0</span>
              </div>

              {/* Tax */}
              <div className='flex justify-between'>
                <span className='text-sm font-bold text-[#4f5665]'>Tax</span>
                <span className='text-sm font-bold text-[#0b132a]'>
                  Idr. 4000
                </span>
              </div>

              {/* Sub Total */}
              <div className='flex justify-between'>
                <span className='text-sm font-bold text-[#4f5665]'>
                  Sub Total
                </span>
                <span className='text-sm font-bold text-[#0b132a]'>
                  Idr. 44.000
                </span>
              </div>

              {/* Checkout */}
              <a
                href='./history.html'
                className='text-center text-sm font-normal bg-[#ff8906] py-2.5 rounded-md text-[#0b132a]'
              >
                Checkout
              </a>

              {/* We Accept */}
              <span className='text-sm font-normal'>We Accept</span>

              {/* Bank */}
              <div className='flex justify-between'>
                <img src='src/assets/img/icon/BRI.svg' alt='BRI' />
                <img src='src/assets/img/icon/DANA.svg' alt='DANA' />
                <img src='src/assets/img/icon/BCA.svg' alt='BCA' />
                <img src='src/assets/img/icon/GOPAY.svg' alt='GOPAY' />
                <img src='src/assets/img/icon/OVO.svg' alt='OVO' />
                <img src='src/assets/img/icon/PAYPAL.svg' alt='PAYPAL' />
              </div>

              <p className='text-sm font-normal'>
                *Get Discount if you pay with Bank Central Asia
              </p>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
