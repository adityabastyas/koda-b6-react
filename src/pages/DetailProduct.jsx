import React from "react";
import Button from "../components/Button";
import CartMenu from "../components/CartMenu";
import { useParams } from "react-router-dom";
import { DataContext } from "../components/DataProvider";

function DetailProduct() {
  const [count, setCount] = React.useState(1);
  const { id } = useParams();
  const { data } = React.useContext(DataContext);

  const productFromStorage = JSON.parse(localStorage.getItem("product"));

  const productFromContext = data?.products?.find(
    (item) => item.id === Number(id)
  );

  const item = productFromContext || productFromStorage;

  return (
    <>
      <section className='flex flex-col px-32 md:flex-row w-full px-5 md:gap-5'>
        {/* Image Gallery */}
        <div className='flex flex-col gap-[15px] md:w-1/2'>
          <img
            src={item.image.imageSatu}
            alt='Main product image coffe'
            className='w-full h-auto block'
          />
          <div className='flex w-full gap-3'>
            <img
              src={item.image.imageDua}
              alt='Thumbnail 1 product coffe'
              className='flex-1 min-w-0'
            />
            <img
              src={item.image.imageTiga}
              alt='Thumbnail 2 product coffe'
              className='flex-1 min-w-0'
            />
            <img
              src={item.image.imageEmpat}
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
            {item.name}
          </h3>

          {/* Price */}
          <div className='flex gap-2.5'>
            <span className="text-[#d00000] text-xs font-medium font-['Plus_Jakarta_Sans'] line-through">
              {item.price}
            </span>
            <span className="font-medium text-[22px] text-[#ff8906] font-['Plus_Jakarta_Sans']">
              {item.discount}
            </span>
          </div>

          {/* Rating */}
          <div className='flex items-center gap-2.5'>
            <img
              className='mr-2.5'
              src='./img/icon/start.svg'
              alt='star icon'
            />
            <img
              className='mr-2.5'
              src='./img/icon/start.svg'
              alt='star icon'
            />
            <img
              className='mr-2.5'
              src='./img/icon/start.svg'
              alt='star icon'
            />
            <img
              className='mr-2.5'
              src='./img/icon/start.svg'
              alt='star icon'
            />
            <img
              className='mr-2.5'
              src='./img/icon/start.svg'
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
            cool water and uses time instead of heat to extract the flavor. It
            is brewed in small batches and steeped for as long as 48 hours.
          </p>

          {/* Quantity Selector */}
          <div className="flex gap-5 text-sm font-bold text-[#0b132a] font-['Plus_Jakarta_Sans'] items-center">
            <button
              onClick={() => {
                if (count > 1) {
                  setCount(count - 1);
                }
              }}
              className='border border-[#ff8906] rounded px-2.5 py-1.5 cursor-pointer text-xl'
            >
              -
            </button>
            <span>{count}</span>
            <button
              onClick={() => {
                if (count < 20) {
                  setCount(count + 1);
                }
              }}
              className='bg-[#ff8906] rounded border-none px-2.5 py-1.5 cursor-pointer text-xl'
            >
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

      <section className='mt-14 px-32'>
        <h2 className='text-[#0b132a] font-medium text-2xl mb-6 ml-5'>
          Recommendation <span className='text-[#8e6447]'>For You</span>
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3'>
          <CartMenu
            image='src/assets/img/image-27.png'
            title='Hazelnut Latte'
            description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
            rating={5}
            oldPrice='IDR 20.000'
            price='IDR 10.000'
            showFlashSale={true}
          />
          <CartMenu
            image='src/assets/img/image-22.png'
            title='Hazelnut Latte'
            description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
            rating={5}
            oldPrice='IDR 20.000'
            price='IDR 10.000'
            showFlashSale={true}
          />
          <CartMenu
            image='src/assets/img/image-31.png'
            title='Hazelnut Latte'
            description='You can explore the menu that we provide with fun and have their own taste and make your day better.'
            rating={5}
            oldPrice='IDR 20.000'
            price='IDR 10.000'
            showFlashSale={true}
          />
        </div>
      </section>
    </>
  );
}

export default DetailProduct;
