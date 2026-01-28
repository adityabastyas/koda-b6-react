import React from "react";
import Button from "../components/Button";

function DetailProduct() {
  return (
    <section className='flex flex-col md:flex-row w-full px-5 md:gap-5'>
      {/* Image Gallery */}
      <div className='flex flex-col gap-[15px] md:w-1/2'>
        <img
          src='src/assets/img/image-31.png'
          alt='Main product image coffe'
          className='w-full h-auto block'
        />
        <div className='flex w-full gap-3'>
          <img
            src='src/assets/img/image-31.png'
            alt='Thumbnail 1 product coffe'
            className='flex-1 min-w-0'
          />
          <img
            src='src/assets/img/image-31.png'
            alt='Thumbnail 2 product coffe'
            className='flex-1 min-w-0'
          />
          <img
            src='src/assets/img/image-31.png'
            alt='Thumbnail 3 product coffe'
            className='flex-1 min-w-0'
          />
        </div>
      </div>

      {/* Product Details */}
      <article className='flex flex-col gap-[15px] mt-2.5 md:mt-0 md:w-1/2'>
        {/* Flash Sale Badge */}
        <div className='flex'>
          <span className="text-white font-['Plus_Jakarta_Sans'] text-lg font-bold py-2.5 px-2.5 rounded-3xl bg-[#d00000]">
            FLASH SALE!
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[22px] font-medium text-[#0b132a] font-['Plus_Jakarta_Sans']">
          Hazelnut Latte
        </h3>

        {/* Price */}
        <div className='flex gap-2.5'>
          <span className="text-[#d00000] text-xs font-medium font-['Plus_Jakarta_Sans'] line-through">
            IDR 20.000
          </span>
          <span className="font-medium text-[22px] text-[#ff8906] font-['Plus_Jakarta_Sans']">
            IDR 10.000
          </span>
        </div>

        {/* Rating */}
        <div className='flex items-center gap-2.5'>
          <img
            className='mr-2.5'
            src='src/assets/img/icon/start.svg'
            alt='star icon'
          />
          <img
            className='mr-2.5'
            src='src/assets/img/icon/start.svg'
            alt='star icon'
          />
          <img
            className='mr-2.5'
            src='src/assets/img/icon/start.svg'
            alt='star icon'
          />
          <img
            className='mr-2.5'
            src='src/assets/img/icon/start.svg'
            alt='star icon'
          />
          <img
            className='mr-2.5'
            src='src/assets/img/icon/start.svg'
            alt='star icon'
          />
          <span className="text-[#4f5665] text-base font-normal font-['Plus_Jakarta_Sans']">
            5.0
          </span>
        </div>

        {/* Review */}
        <div className="flex text-sm font-normal text-[#4f5665] font-['Plus_Jakarta_Sans'] gap-4">
          <span>200+ Review</span>
          <span>|</span>
          <span>Recommendation</span>
          <img
            src='src/assets/img/icon/ThumbsUp.svg'
            alt='like icon'
            className='cursor-pointer'
          />
        </div>

        {/* Description */}
        <p className="font-normal font-['Plus_Jakarta_Sans'] text-[#4f5665] text-sm">
          Cold brewing is a method of brewing that combines ground coffee and
          cool water and uses time instead of heat to extract the flavor. It is
          brewed in small batches and steeped for as long as 48 hours.
        </p>

        {/* Quantity Selector */}
        <div className="flex gap-5 text-sm font-bold text-[#0b132a] font-['Plus_Jakarta_Sans'] items-center">
          <button className='border border-[#ff8906] rounded px-2.5 py-1.5 cursor-pointer text-xl'>
            -
          </button>
          <span>1</span>
          <button className='bg-[#ff8906] rounded border-none px-2.5 py-1.5 cursor-pointer text-xl'>
            +
          </button>
        </div>

        {/* Size Selection */}
        <h4 className="text-[#0b0909] font-['Plus_Jakarta_Sans'] text-sm font-bold">
          Choose Size
        </h4>
        <div className="flex gap-[31px] text-[#0b0909] font-['Plus_Jakarta_Sans'] font-normal text-xs">
          <span className='py-2.5 px-5 border border-[#ebb1b1] cursor-pointer text-[#4f5665]'>
            Regular
          </span>
          <span className='py-2.5 px-5 border border-[#ebb1b1] cursor-pointer text-[#4f5665]'>
            Medium
          </span>
          <span className='py-2.5 px-5 border border-[#ebb1b1] cursor-pointer text-[#4f5665]'>
            Large
          </span>
        </div>

        {/* Temperature Selection */}
        <h4 className="text-[#0b0909] font-['Plus_Jakarta_Sans'] text-sm font-bold">
          Hot/Ice?
        </h4>
        <div className="flex gap-[31px] text-[#0b0909] font-['Plus_Jakarta_Sans'] font-normal text-xs">
          <span className='py-2.5 px-5 border border-[#ebb1b1] cursor-pointer text-[#4f5665]'>
            Ice
          </span>
          <span className='py-2.5 px-5 border border-[#ebb1b1] cursor-pointer text-[#4f5665]'>
            Hot
          </span>
        </div>

        {/* Action Buttons */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <Button>Buy</Button>
          <Button className='border bg-white border-[#ff8906] rounded-md py-4 flex gap-4 justify-center'>
            <img
              src='src/assets/img/icon/ShoppingCart.svg'
              alt='icon cart shopping'
              className='w-6 h-6'
            />
            <span className='text-[#ff8906]'>add to cart</span>
          </Button>
        </div>
      </article>
    </section>
  );
}

export default DetailProduct;
