import React from "react";

import CartHistory from "../components/CartHistory";
import Stepper from "../components/Stepper";
import { Link } from "react-router-dom";
import { DataContext } from "../components/DataProvider";
import { useSelector } from "react-redux";
import http from "../lib/http";

function HistoryOrder() {
  const [orders, setOrders] = React.useState([]);
  const {data} = React.useContext(DataContext);

  const {currentUser, isLogin} = useSelector((state) => state.auth);

  const [selectedMonth, setSelectedMonth] = React.useState(
    new Date().toLocaleDateString("id-ID", { month: "long", year: "numeric" }) 
  );


  React.useEffect(() => {
    if (!isLogin || !currentUser) {
      setOrders([]);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await http(`/transactions/user/${currentUser.user_id}`);
        const dataTrans = await res.json();

        const transactions = dataTrans.result || [];

        const withProducts = await Promise.all(
          transactions.map(async (trx) => {
            const resItems = await http(`/transaction-products/${trx.transaction_id}`);
            const dataItems = await resItems.json();

            return {
              ...trx,
              items: dataItems.result || []
            };
          })
        );

        setOrders(withProducts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [isLogin, currentUser, selectedMonth]);

 


  return (
    <>
      <main className="font-['Plus_Jakarta_Sans'] px-32 pt-[78px] pb-[86px]">
        {/* Title */}
        <div className='flex gap-5 mb-9'>
          <h1 className='text-[#0b132a] font-semibold text-4xl'>
            History Order
          </h1>
          <span className='p-2.5 bg-[#e8e8e8] text-[#0b132a]'>{orders.length}</span>
        </div>
        <section className='grid grid-cols-1 sm:grid-cols-2'>
          <section className='grid grid-cols-1 col-span-1'>
            <section className=' w-full'>
              <div className='flex flex-col gap-4 mb-9 md:flex-row md:items-center md:justify-between'>
                {/* Calendar Select */}
                <div className='flex items-center gap-2.5 bg-[#e8e8e899] px-2.5 w-fit order-1 md:order-2'>
                  <img
                    src='src/assets/img/icon/Calendar.svg'
                    alt='Calendar icon'
                  />
                  <select 
                    className='bg-transparent outline-none text-sm cursor-pointer'
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    {Array.from({length: 12}, (_, i) => {
                      const date = new Date(2026, i, 1);
                      const monthYear = date.toLocaleDateString("id-ID", { month: "long", year: "numeric" });
                      return (
                        <option key={i} value={monthYear}>
                          {monthYear}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* Tabs */}
                <div className='flex gap-2 bg-[#e8e8e899] p-2 w-full md:w-auto order-2 md:order-1'>
                  <input
                    type='radio'
                    name='tab'
                    id='tab1'
                    defaultChecked
                    className='hidden peer/tab1'
                  />
                  <label
                    htmlFor='tab1'
                    className='flex-1 md:flex-none px-4 md:px-6 py-3 text-sm md:text-base font-medium cursor-pointer peer-checked/tab1:bg-white '
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
                    className='flex-1 md:flex-none px-4 md:px-6 py-3 text-sm md:text-base font-medium cursor-pointer peer-checked/tab2:bg-white'
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
                    className='flex-1 md:flex-none  px-4 md:px-6 py-3text-sm md:text-base font-medium cursor-pointer peer-checked/tab3:bg-white'
                  >
                    Finish Order
                  </label>
                </div>
              </div>
            </section>

            <section>
              {orders.length === 0 ? (
                <p className="text-gray-500">Belum ada order</p>
              ) : (
                orders.map((order) => {
                  return (
                    <div key={order.transaction_id}>
                      {order.items?.map((item, index) => {
                        const product = data?.products?.find(
                          (p) => p.id === item.product_id
                        );

                        if (!product) {return null;}

                        return (
                          <CartHistory
                            key={`${order.transaction_id}-${index}`}
                            src={product?.image?.imageSatu || ""}
                            alt={product?.name}
                            noOrder={order.transaction_id}
                            date={new Date(order.tanggal).toLocaleDateString()}
                            total={`Idr ${order.total.toLocaleString()}`}
                            status={"On Progress"}
                          />
                        );
                      })}
                    </div>
                  );
                })
              )}


              <div>
                <Stepper />
              </div>
            </section>
          </section>

          <section className="col-span-none sm:col-span-1 font-['Plus_Jakarta_Sans'] flex flex-col gap-2 max-h-[230px] bg-[#e8e8e8] p-5 ">
            <img
              src='/src/assets/img/icon/message.svg'
              alt='icon message'
              className='w-12 h-12'
            />

            <h3 className='font-bold text-lg text-[#4f5665]'>
              Send Us Message
            </h3>

            <p className='text-base font-normal text-[#4f5665]'>
              if your unable to find answer or find your product quickly, please
              describe your problem and tell us. we will give you solution.
            </p>

            <a
              href=''
              className='text-sm font-medium text-[#0b132a] bg-[#ff8906]  text-center py-2.5 rounded-md no-underline'
            >
              Send Message
            </a>
          </section>
        </section>
      </main>
    </>
  );
}

export default HistoryOrder;
