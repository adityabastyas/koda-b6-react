import React from "react";
import CartOrder from "../components/CartOrder";
import Input from "../components/Input";
import { DataContext } from "../components/DataProvider";
import { Link, useNavigate } from "react-router-dom";
import ModalLoading from "../components/ModalLoading";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function CheckoutProduct() {
  const {isLogin , currentUser} = useSelector((state) => state.auth);
  const [show,setShow] = React.useState(false);


  const {register,reset} = useForm();

  React.useEffect(() => {
    if (isLogin && currentUser) {
      reset({
        email: currentUser.email || "",
        fullName: currentUser.fullName || "",
        address: currentUser.address || "",
      });
    } else {
      reset({
        email: "",
        fullName: "",
        address: "",
      });
    }
  }, [isLogin, currentUser, reset]);


  const checkout = JSON.parse(localStorage.getItem("checkout")) || [];

  const [checkoutState, setCheckoutState] = React.useState(checkout);

  const { data } = React.useContext(DataContext);





  let totalOrder = 0;
  checkoutState.forEach((item) => {
    const product = data?.products?.find((i) => i.id === item.productId);

    if (!product) {
      return;
    }

    totalOrder += product.discount * item.quantity;
  });

  const navigate = useNavigate();

  const handleCheckout = () => {
    if(!isLogin){
      setShow(true);

      setTimeout(() => {
        setShow(false);
      },2000);

      return;
    }

    let historyOld = JSON.parse(localStorage.getItem("historyOrders")) || [];

    const newOrder = {
      id: "#" + Date.now(),
      date: new Date().toLocaleDateString(),
      items: checkoutState,
      total: subTotal,
      status: "On Progress"
    };

    const updateHistory = [newOrder, ...historyOld];

    window.localStorage.setItem("historyOrders", JSON.stringify(updateHistory));

    window.localStorage.removeItem("checkout");
    setCheckoutState([]);


    navigate("/history-order");
  };

  const handleRemove = (indexRemove) => {
    const updatedCart = checkoutState.filter((item, currentIndex) => {
      return currentIndex !== indexRemove;
    });

    localStorage.setItem("checkout", JSON.stringify(updatedCart));

    setCheckoutState(updatedCart);
  };

  const [deliveryOption, setDeliveryOption] = React.useState("Dine In");

  let deliveryCost = 0;
  if (deliveryOption === "Dine In") {
    deliveryCost = 0;
  } else if (deliveryOption === "Door Delivery") {
    deliveryCost = 10000;
  } else if (deliveryOption === "Pick Up") {
    deliveryCost = 5000;
  }

  const tax = Math.ceil((totalOrder + deliveryCost) * 0.1);

  const subTotal = totalOrder + deliveryCost + tax;

  return (
    <>
      <ModalLoading isOke={show} text="Silahkan login terlebihdahulu" />
      <div>
        <h1 className='text-5xl py-8 px-5 sm:px-5 md:px-32 font-semibold'>
          Payment Details
        </h1>
        <div className='grid grid-cols- sm:grid-cols-2 sm:px-5 md:px-32'>
          <section className=' px-5 sm:col-span-1 mb-5'>
            <div className='flex justify-between  mb-4'>
              <span className='text-2xl font-medium'>Your Order</span>
              <span className='bg-[#ff8906] text-sm font-medium px-2.5 rounded-md cursor-pointer text-black flex items-center'>
                <Link to="/products">
                
                + Add Menu
                </Link>
              </span>
            </div>
            {/* {card menu} */}

            {checkoutState.map((item, index) => {
              const product = data?.products?.find(
                (i) => i.id === item.productId
              );
              if (!product) {
                return null;
              }

              return (
                <div key={index}>
                  <CartOrder
                    src={product.image.imageSatu}
                    alt={product.name}
                    title={product.name}
                    quantity={`${item.quantity} pcs`}
                    size={item.size}
                    temperature={item.temperature}
                    dineOption={deliveryOption}
                    originalPrice={product.price}
                    discountPrice={product.discount}
                    isFlashSale={true}
                    xIcon={true}
                    onRemove={() => handleRemove(index)}
                  />
                </div>
              );
            })}

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
                  {...register("email")}
                />
                <Input
                  htmlFor='fullName'
                  label='Full Name'
                  id='fullName'
                  placeholder='Enter Your Full Name'
                  src='./src/assets/img/icon/Profile.svg'
                  alt='icon profile'
                  {...register("fullName")}
                />
                <Input
                  htmlFor='address'
                  label='Address'
                  id='address'
                  placeholder='Enter Your Address'
                  src='./src/assets/img/icon/location.svg'
                  alt='icon location'
                  {...register("address")}
                />

                {/* {delevery} */}
                <label className='block  text-base font-semibold text-[#0b132a]'>
                  Delivery
                </label>

                <div className='flex justify-between '>
                  {["Dine In", "Door Delivery", "Pick Up"].map((item) => (
                    <button
                      type='button'
                      className={`cursor-pointer p-2 rounded-lg hover:bg-amber-300 border ${
                        deliveryOption === item
                          ? "bg-[#ff8906] text-black"
                          : "bg-white text-[#0b132a]"
                      }`}
                      onClick={() => setDeliveryOption(item)}
                    >
                      {item}
                    </button>
                  ))}
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
                  Idr. {totalOrder.toLocaleString()}
                </span>
              </div>

              {/* Delivery */}
              <div className='flex justify-between'>
                <span className='text-sm font-bold text-[#4f5665]'>
                  Delivery
                </span>
                <span className='text-sm font-bold text-[#0b132a]'>
                  Idr. {deliveryCost.toLocaleString()}
                </span>
              </div>

              {/* Tax */}
              <div className='flex justify-between'>
                <span className='text-sm font-bold text-[#4f5665]'>Tax</span>
                <span className='text-sm font-bold text-[#0b132a]'>
                  Idr. {tax.toLocaleString()}
                </span>
              </div>

              {/* Sub Total */}
              <div className='flex justify-between'>
                <span className='text-sm font-bold text-[#4f5665]'>
                  Sub Total
                </span>
                <span className='text-sm font-bold text-[#0b132a]'>
                  Idr. {subTotal.toLocaleString()}
                </span>
              </div>

              {/* Checkout */}
              <button
                onClick={handleCheckout}
                className='text-center text-sm font-normal bg-[#ff8906] py-2.5 rounded-md text-[#0b132a] cursor-pointer'
              >
                Checkout
              </button>

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
