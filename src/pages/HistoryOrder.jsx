import React from "react";

import CartHistory from "../components/CartHistory";

function HistoryOrder() {
  return (
    <>
      <main className="font-['Plus_Jakarta_Sans'] px-32 pt-[78px] pb-[86px]">
        {/* Title */}
        <div className='flex gap-5 mb-9'>
          <h1 className='text-[#0b132a] font-semibold text-4xl'>
            History Order
          </h1>
          <span className='p-2.5 bg-[#e8e8e8] text-[#0b132a]'>2</span>
        </div>

        <section className='flex gap-5'>
          <section className='detail-history w-full'>
            <div className='flex gap-10 mb-9'>
              {/* Tabs */}
              <div className='flex gap-2 bg-[#e8e8e899] p-2'>
                <input
                  type='radio'
                  name='tab'
                  id='tab1'
                  defaultChecked
                  className='hidden peer/tab1'
                />
                <label
                  htmlFor='tab1'
                  className='px-6 py-3 text-base font-medium cursor-pointer peer-checked/tab1:bg-white'
                >
                  On Progress
                </label>

                <input
                  type='radio'
                  name='tab'
                  id='tab2'
                  className='hidden peer/tab2'
                />
                <label
                  htmlFor='tab2'
                  className='px-6 py-3 text-base font-medium cursor-pointer peer-checked/tab2:bg-white'
                >
                  Sending Goods
                </label>

                <input
                  type='radio'
                  name='tab'
                  id='tab3'
                  className='hidden peer/tab3'
                />
                <label
                  htmlFor='tab3'
                  className='px-6 py-3 text-base font-medium cursor-pointer peer-checked/tab3:bg-white'
                >
                  Finish Order
                </label>
              </div>

              {/* Calendar Select */}
              <div className='flex items-center gap-2.5 bg-[#e8e8e899] px-2.5'>
                <img
                  src='src/assets/img/icon/Calendar.svg'
                  alt='Calendar icon'
                />
                <select className='bg-transparent outline-none text-sm cursor-pointer'>
                  <option>Januari 2023</option>
                  <option>Februari 2023</option>
                  <option>Maret 2023</option>
                  <option>April 2023</option>
                  <option>Mei 2023</option>
                  <option>Juni 2023</option>
                  <option>Juli 2023</option>
                  <option>Agustus 2023</option>
                  <option>September 2023</option>
                  <option>Oktober 2023</option>
                  <option>November 2023</option>
                  <option>Desember 2023</option>
                </select>
              </div>
            </div>
          </section>
        </section>

        <CartHistory
          src='src/assets/img/image-31.png'
          alt='Hazelnut Latte'
          noOrder='#12354-09893'
          date='23 January 2023'
          total='Idr 40.000'
          status='On Progress'
        />

        <CartHistory
          src='src/assets/img/image-31.png'
          alt='Vanilla Latte'
          noOrder='#98765-43210'
          date='25 January 2023'
          total='Idr 55.000'
          status='Finish Order'
        />
        <CartHistory
          src='src/assets/img/image-31.png'
          alt='Vanilla Latte'
          noOrder='#98765-43210'
          date='25 January 2023'
          total='Idr 55.000'
          status='Sending Goods'
        />
      </main>
    </>
  );
}

export default HistoryOrder;
