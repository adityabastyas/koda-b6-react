import React from "react";

import CartOrder from "../components/CartOrder";

function DetailOrder() {
  return (
    <>
      <main className="font-['Plus_Jakarta_Sans'] px-[130px] pt-[78px] pb-[57px]">
        {/* Title */}
        <h1 className='text-[48px] font-bold text-[#0b0909]'>
          Order #12354-09893
        </h1>

        {/* Date */}
        <span className='block mt-px-2.5 mb-7 text-base font-normal text-[#4f5665]'>
          21 March 2023 at 10:30 AM
        </span>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Order Information */}
          <section className='flex flex-col'>
            <h3 className='text-[22px] font-normal text-[#0b132a] mb-3'>
              Order Information
            </h3>

            {/* Item */}
            <div className='flex justify-between bg-[#e8e8e8] px-2.5 py-5 border-b border-[#cdcdcd]'>
              <div className='flex items-center gap-2'>
                <img src='src/assets/img/icon/Profile.svg' alt='icon profile' />
                <span className='text-base font-normal text-[#4f5665]'>
                  Full Name
                </span>
              </div>
              <span className='text-base font-bold text-[#0b132a]'>
                Ghaluh Wizard Anggoro
              </span>
            </div>

            <div className='flex justify-between bg-[#e8e8e8] px-2.5 py-5 border-b border-[#cdcdcd]'>
              <div className='flex items-center gap-2'>
                <img
                  src='src/assets/img/icon/Location.svg'
                  alt='icon location'
                />
                <span className='text-base font-normal text-[#4f5665]'>
                  Address
                </span>
              </div>
              <span className='text-base font-bold text-[#0b132a]'>
                Griya bandung indah
              </span>
            </div>

            <div className='flex justify-between bg-[#e8e8e8] px-2.5 py-5 border-b border-[#cdcdcd]'>
              <div className='flex items-center gap-2'>
                <img src='src/assets/img/icon/PhoneCall.svg' alt='icon phone' />
                <span className='text-base font-normal text-[#4f5665]'>
                  Phone
                </span>
              </div>
              <span className='text-base font-bold text-[#0b132a]'>
                082116304338
              </span>
            </div>

            <div className='flex justify-between bg-[#e8e8e8] px-2.5 py-5 border-b border-[#cdcdcd]'>
              <div className='flex items-center gap-2'>
                <img
                  src='src/assets/img/icon/u_postcard.svg'
                  alt='icon postcard'
                />
                <span className='text-base font-normal text-[#4f5665]'>
                  Payment Method
                </span>
              </div>
              <span className='text-base font-bold text-[#0b132a]'>Cash</span>
            </div>

            <div className='flex justify-between bg-[#e8e8e8] px-2.5 py-5 border-b border-[#cdcdcd]'>
              <div className='flex items-center gap-2'>
                <img src='src/assets/img/icon/truck.svg' alt='icon truck' />
                <span className='text-base font-normal text-[#4f5665]'>
                  Shipping
                </span>
              </div>
              <span className='text-base font-bold text-[#0b132a]'>
                Dine In
              </span>
            </div>

            <div className='flex justify-between bg-[#e8e8e8] px-2.5 py-5 border-b border-[#cdcdcd]'>
              <div className='flex items-center gap-2'>
                <img src='src/assets/img/icon/process.svg' alt='icon process' />
                <span className='text-base font-normal text-[#4f5665]'>
                  Status
                </span>
              </div>
              <span className='text-[12px] font-bold text-[#00a700] bg-[#00a70033] px-2.5 py-1.5 rounded-full'>
                Done
              </span>
            </div>

            <div className='flex justify-between bg-[#e8e8e8] px-2.5 py-5'>
              <span className='text-base font-normal text-[#4f5665]'>
                Total Transaction
              </span>
              <span className='text-base font-bold text-[#ff8906]'>
                Idr 40.000
              </span>
            </div>
          </section>
          <section className='md:col-span-1 grid grid-cols-1 '>
            <h3 className='text-[22px] font-normal text-[#0b132a] mb-3'>
              Your Order
            </h3>
            <div className=''>
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
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default DetailOrder;
