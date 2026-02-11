import React from "react";
import { Link } from "react-router-dom";

function CartHistory({ src, alt, noOrder, date, total, status }) {
  return (
    <article className="flex gap-2.5 font-['Plus_Jakarta_Sans'] bg-[#e8e8e84d] mb-3 p-2">
      {/* Image */}
      <img src={src} alt={alt} className='w-[100px] h-[100px]' />

      {/* Content */}
      <div className='flex flex-wrap'>
        {/* Order Number */}
        <div className='flex flex-col gap-2 pr-2.5'>
          <div className='flex items-center gap-2'>
            <img
              src='src/assets/img/icon/no-order.svg'
              alt='icon no-order'
              className='w-4 h-4'
            />
            <span className='text-[#4f5665] text-base font-medium mt-2.5'>
              No. Order
            </span>
          </div>
          <span className='text-base font-bold'>{noOrder}</span>
        </div>

        {/* Date */}
        <div className='flex flex-col gap-2 pr-2.5'>
          <div className='flex items-center gap-2'>
            <img
              src='src/assets/img/icon/date.svg'
              alt='icon date'
              className='w-4 h-4'
            />
            <span className='text-[#4f5665] text-base font-medium mt-2.5'>
              Date
            </span>
          </div>
          <span className='text-base font-bold'>{date}</span>
        </div>

        {/* Total */}
        <div className='flex flex-col gap-2 pr-2.5'>
          <div className='flex items-center gap-2'>
            <img
              src='src/assets/img/icon/repeat.svg'
              alt='icon total'
              className='w-4 h-4'
            />
            <span className='text-[#4f5665] text-base font-medium mt-2.5'>
              Total
            </span>
          </div>
          <span className='text-base font-bold'>{total}</span>
        </div>

        {/* Status */}
        <div className='flex flex-col gap-2 pr-2.5'>
          <div className='flex items-center gap-2'>
            <img
              src='src/assets/img/icon/process.svg'
              alt='icon process'
              className='w-4 h-4'
            />
            <span className='text-[#4f5665] text-base font-medium mt-2.5'>
              Status
            </span>
          </div>
          <span className='bg-[#ff890633] text-[#ff8906] text-xs font-bold rounded-3xl p-2.5  w-max'>
            {status}
          </span>
        </div>

        {/* Link */}
        <Link
          to="/detail-order"
          state={{ noOrder, date, total, status }}
          className="text-sm font-medium text-[#ff8906] underline mt-2"
        >
  View Order Detail
        </Link>

      </div>
    </article>
  );
}

export default CartHistory;
