import React from "react";

import CartOrder from "../components/CartOrder";
import { useParams } from "react-router-dom";
import { DataContext } from "../components/DataProvider";

function DetailOrder() {
  const {id} = useParams();
  const {data} = React.useContext(DataContext);
  
  const history = JSON.parse(localStorage.getItem("historyOrders")) || [];

  const order = history.find(
    (item) => item.id === id
  );

  if (!order) {
    return <p className="p-10">Order tidak ditemukan</p>;
  }



  return (
    <>
      <main className="font-['Plus_Jakarta_Sans'] px-[130px] pt-[78px] pb-[57px]">
        {/* Title */}
        <h1 className='text-[48px] font-bold text-[#0b0909]'>
          Order {order.id}
        </h1>

        {/* Date */}
        <span className='block mt-px-2.5 mb-7 text-base font-normal text-[#4f5665]'>
          {order.date}
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
                {order.fullName}
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
                {order.address}

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
                {order.phone}

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
              <span className='text-base font-bold text-[#0b132a]'>{order.paymentMethod}
              </span>
            </div>

            <div className='flex justify-between bg-[#e8e8e8] px-2.5 py-5 border-b border-[#cdcdcd]'>
              <div className='flex items-center gap-2'>
                <img src='src/assets/img/icon/truck.svg' alt='icon truck' />
                <span className='text-base font-normal text-[#4f5665]'>
                  Shipping
                </span>
              </div>
              <span className='text-base font-bold text-[#0b132a]'>
                {order.deliveryOption}

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
                {order.status}
              </span>
            </div>

            <div className='flex justify-between bg-[#e8e8e8] px-2.5 py-5'>
              <span className='text-base font-normal text-[#4f5665]'>
                Total Transaction
              </span>
              <span className='text-base font-bold text-[#ff8906]'>
                Idr {Number(order.total).toLocaleString()}

              </span>
            </div>
          </section>
          <section className='md:col-span-1 grid grid-cols-1 '>
            <h3 className='text-[22px] font-normal text-[#0b132a] mb-3'>
              Your Order
            </h3>
            <div className=''>
              {order.items?.map((item, index) => {
                const product = data?.products?.find(
                  (i) => i.id === item.productId
                );

                if (!product) {return null;}

                return (
                  <CartOrder
                    key={`${item.productId}-${index}`}
                    src={product.image.imageSatu}
                    alt={product.name}
                    title={product.name}
                    quantity={`${item.quantity} pcs`}
                    size={item.size}
                    temperature={item.temperature}
                    dineOption={order.deliveryOption || "Dine In"}
                    originalPrice={product.price}
                    discountPrice={product.discount}
                    isFlashSale={true}
                  />
                );
              })}
             
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default DetailOrder;
