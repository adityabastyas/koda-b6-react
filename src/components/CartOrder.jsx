import React from "react";

function CartOrder({
  src,
  alt,
  title,
  quantity,
  size,
  temperature,
  dineOption,
  originalPrice,
  discountPrice,
}) {
  return (
    <>
      <article className='flex bg-[#e8e8e84d] p-2.5 relative gap-5'>
        <div>
          <img src={src} alt={alt} className='w-full h-full' />
        </div>
        <div className='flex flex-col gap-[15px] relative w-full mt-[11px]'>
          <h4 className="text-white font-['Plus_Jakarta_Sans'] text-lg font-bold py-2.5 px-2.5 rounded-3xl bg-[#d00000] w-max">
            FLASH SALE!
          </h4>
          <h3 className="text-[22px] font-medium text-[#0b132a] font-['Plus_Jakarta_Sans']">
            {title}
          </h3>
          <span className='text-lg font-normal'>
            {quantity} | {size} | {temperature} | {dineOption}
          </span>
          <div>
            <span className="text-[#d00000] text-xs font-medium font-['Plus_Jakarta_Sans'] line-through mr-2.5">
              {originalPrice}
            </span>
            <span className="font-medium text-[22px] text-[#ff8906] font-['Plus_Jakarta_Sans']">
              {discountPrice}
            </span>
          </div>
          <div className='absolute top-[60px] right-2.5 cursor-pointer w-6 h-6'>
            <img
              className='w-6 h-6'
              src='src/assets/img/icon/XCircle.svg'
              alt='icon x'
            />
          </div>
        </div>
      </article>
    </>
  );
}

export default CartOrder;
