import React from "react";
import Button from "./Button";

function CartMenu(props) {
  const {
    image,
    title,
    description,
    rating = 5,
    ratingText,
    oldPrice,
    price,
    showFlashSale = false,
  } = props;
  const safeRating = Math.min(rating, 5);

  const stars = [1, 2, 3, 4, 5];

  return (
    <article className='relative flex flex-col'>
      {showFlashSale && (
        <h4 className='absolute top-3.5 left-3.5 bg-[#d00000] text-white text-lg font-bold font-[Plus_Jakarta_Sans] p-2.5 rounded-3xl z-10'>
          FLASH SALE!
        </h4>
      )}

      <header>
        <img
          src={image}
          alt={title}
          className='w-[377px] h-[360px] object-cover'
        />
      </header>

      <div className='bg-white w-[345px] px-2.5 pt-2.5 pb-6 ml-4 mt-5 relative z-10'>
        <h3 className='text-[22px] font-medium text-[#0b132a] font-[Plus_Jakarta_Sans]'>
          {title}
        </h3>

        <p className='text-[#4f5665] text-sm font-normal font-[Plus_Jakarta_Sans] my-3'>
          {description}
        </p>

        <div className='flex items-center mb-6'>
          {stars.slice(0, safeRating).map((star) => (
            <img
              key={star}
              src='src/assets/img/icon/start.svg'
              alt='icon-star'
              className='mr-2.5'
            />
          ))}

          <span className='text-[#4f5665] text-base font-normal font-[Plus_Jakarta_Sans]'>
            {ratingText || `${safeRating}.0`}
          </span>
        </div>

        <div className='flex items-center mb-3'>
          {oldPrice && (
            <span className='text-[#d00000] text-xs font-medium font-[Plus_Jakarta_Sans] line-through mr-2.5'>
              {oldPrice}
            </span>
          )}

          <span className='text-[#ff8906] text-xl font-medium font-[Plus_Jakarta_Sans]'>
            {price}
          </span>
        </div>

        <footer className='flex items-center gap-2 mt-3'>
          <div className='flex-3'>
            <Button>Buy</Button>
          </div>

          <a
            href='#'
            className='flex-1 flex items-center justify-center
              border border-[#ff8906] rounded-md py-4'
          >
            <img
              src='src/assets/img/icon/ShoppingCart.svg'
              alt='icon-cart-shopping'
              className='w-6 h-6'
            />
          </a>
        </footer>
      </div>
    </article>
  );
}

export default CartMenu;
