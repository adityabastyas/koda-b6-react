import { AiOutlineShoppingCart } from "react-icons/ai"; 
import { BsFillHandThumbsUpFill } from "react-icons/bs"; 
import { AiFillStar } from "react-icons/ai"; 
import React from "react";
import Button from "../components/Button";
import CartMenu from "../components/CartMenu";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../components/DataProvider";

function DetailProduct() {
  const [count, setCount] = React.useState(1);
  const [size, setSize] = React.useState("Regular");
  const [temperature, setTemperature] = React.useState("Ice");

  const { id } = useParams();
  const { data } = React.useContext(DataContext);

  const productFromStorage = JSON.parse(localStorage.getItem("product"));

  const productFromContext = data?.products?.find(
    (item) => item.id === Number(id)
  );

  const item = productFromContext || productFromStorage;

  React.useEffect(() => {
    if (!item) {
      return;
    }

    const detail = {
      productId: item.id,
      size,
      temperature,
      quantity: count,
    };

    localStorage.setItem("detail", JSON.stringify(detail));
  }, [item]);

  React.useEffect(() => {
    const detail = JSON.parse(localStorage.getItem("detail")) || {};

    localStorage.setItem(
      "detail",
      JSON.stringify({
        ...detail,
        quantity: count,
      })
    );
  }, [count]);

  const handleSelectZise = (value) => {
    setSize(value);

    const detail = JSON.parse(localStorage.getItem("detail")) || {};

    localStorage.setItem("detail", JSON.stringify({ ...detail, size: value }));
  };

  const handleSelectTemperature = (value) => {
    setTemperature(value);

    const detail = JSON.parse(localStorage.getItem("detail")) || {};

    localStorage.setItem(
      "detail",
      JSON.stringify({ ...detail, temperature: value })
    );
  };

  const navigate = useNavigate();

  const handleBuy = () => {
    const detail = JSON.parse(localStorage.getItem("detail"));

    const checkout = JSON.parse(localStorage.getItem("checkout")) || [];

    const searchItem = checkout.find((item) => {
      return (
        item.productId === detail.productId &&
        item.size === detail.size &&
        item.temperature === detail.temperature
      );
    });

    if (searchItem) {
      searchItem.quantity += detail.quantity;
    } else {
      checkout.push(detail);
    }

    localStorage.setItem("checkout", JSON.stringify(checkout));

    navigate("/checkout-product");
  };
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
            <AiFillStar className="text-orange-400"/>
            <AiFillStar className="text-orange-400"/>
            <AiFillStar className="text-orange-400"/>
            <AiFillStar className="text-orange-400"/>
            <AiFillStar className="text-orange-400"/>
            <span className="text-[#4f5665] text-base font-normal font-['Plus_Jakarta_Sans']">
              5.0
            </span>
          </div>

          {/* Review */}
          <div className="flex text-sm font-normal text-[#4f5665] font-['Plus_Jakarta_Sans'] gap-4">
            <span>200+ Review</span>
            <span>|</span>
            <span>Recommendation</span>
            <BsFillHandThumbsUpFill className="text-orange-400"/>
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
            {["Regular", "Medium", "Large"].map((item) => (
              <span
                key={item}
                onClick={() => handleSelectZise(item)}
                className={`py-2.5 px-5 cursor-pointer ${size === item ? "bg-[#ff8906] text-white border-[#ff8906]" : "border-[#ebb1b1] text-[#4f5665] hover:bg-[#ff8906]"}`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Temperature Selection */}
          <h4 className="text-[#0b0909] font-['Plus_Jakarta_Sans'] text-sm font-bold">
            Hot/Ice?
          </h4>
          <div className="flex gap-[31px] text-[#0b0909] font-['Plus_Jakarta_Sans'] font-normal text-xs">
            {["Ice", "Hot"].map((item) => (
              <span
                key={item}
                onClick={() => handleSelectTemperature(item)}
                className={`py-2.5 px-5 border cursor-pointer ${temperature === item ? "bg-[#ff8906] text-white border-[#ff8906]" : "border-[#ebb1b1] text-[#4f5665] hover:bg-[#ff8906] "}`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <Button onClick={handleBuy}>Buy</Button>
            <Button className='border bg-white border-[#ff8906] rounded-md py-4 flex gap-4 justify-center'>
              <AiOutlineShoppingCart className="text-orange-400"/>
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
