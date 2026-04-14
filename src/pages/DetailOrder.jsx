import React from "react";

import CartOrder from "../components/CartOrder";
import { useParams } from "react-router-dom";
import { DataContext } from "../components/DataProvider";
import http from "../lib/http";
import { useSelector } from "react-redux";

function DetailOrder() {
  const {id} = useParams();
  const {data} = React.useContext(DataContext);
  
  const [order, setOrder] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const [itemsDetail, setItemsDetail] = React.useState([]);

  const { currentUser } = useSelector((state) => state.auth);

  

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await http(`/transactions/${id}`);
        const result = await res.json();

        if (!result.success) {return;}

        const transaction = result.result;

        const resItems = await http(`/transaction-products/${id}`);
        const resultItems = await resItems.json();

        const detailItems = await Promise.all(
          (resultItems.result || []).map(async (item) => {

            const product = data?.products?.find(
              (p) => p.id === item.product_id
            );

            if (!product) {return null;}

            const resSize = await http(`/product-sizes/${item.product_id}`);
            const sizeData = await resSize.json();

            const size = sizeData.result?.find(
              (s) => s.product_size_id === item.product_size_id
            );

            const resVariant = await http(`/product-variant/${item.product_id}`);
            const variantData = await resVariant.json();

            const variant = variantData.result?.find(
              (v) => v.variant_id === item.variant_id
            );

            return {
              ...item,
              product,
              sizeName: size?.name,
              temperature: variant?.temperature
            };
          })
        );

        setItemsDetail(detailItems.filter(Boolean));

        setOrder(transaction);

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, data]);


  // if (loading) {return <p className="p-10">Loading...</p>;}
  if (!order) {
    return <p className="p-10">Order tidak ditemukan</p>;
  }

  return (
    <>
      <main className="font-['Plus_Jakarta_Sans'] px-[130px] pt-[78px] pb-[57px]">
        {/* Title */}
        <h1 className='text-[48px] font-bold text-[#0b0909]'>
          Order {order.transaction_id}
        </h1>

        {/* Date */}
        <span className='block mt-px-2.5 mb-7 text-base font-normal text-[#4f5665]'>
          {new Date(order.tanggal).toLocaleDateString()}
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
                {order.fullname}
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
                {order.phone || currentUser?.phone}

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
              <span className='text-base font-bold text-[#0b132a]'>{order.paymentMethod || "Cash"}
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
                {order.delivery_type}

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
                {order.status || "On Progress"}
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
              {itemsDetail.map((item, index) => {

                return (
                  <CartOrder
                    key={`${item.product_id}-${index}`}
                    src={item.product?.image?.imageSatu || ""}
                    alt={item.product?.name}
                    title={item.product?.name}
                    quantity={`${item.quantity} pcs`}
                    size={item.sizeName}
                    temperature={item.temperature}
                    dineOption={order.delivery_type || "Dine In"}
                    originalPrice={item.product?.price}
                    discountPrice={item.product?.discount}
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
