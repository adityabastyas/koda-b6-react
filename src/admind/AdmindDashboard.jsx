import React from "react";

function AdmindDashboard() {
  const dataProduk = [
    {
      no: 1,
      name: "Caramel Machato",
      sold: "300 Cup",
      profit: "IDR 9.000.000",
    },
    { no: 2, name: "Hazelnut Latte", sold: "200 Cup", profit: "IDR 8.000.000" },
    { no: 3, name: "Kopi Susu", sold: "100 Cup", profit: "IDR 7.000.000" },
    {
      no: 4,
      name: "Espresso Supreme",
      sold: "90 Cup",
      profit: "IDR 6.000.000",
    },
    {
      no: 5,
      name: "Caramel Velvet Latte",
      sold: "80 Cup",
      profit: "IDR 5.000.000",
    },
    {
      no: 6,
      name: "Hazelnut Dream Brew",
      sold: "70 Cup",
      profit: "IDR 4.000.000",
    },
    {
      no: 7,
      name: "Vanilla Silk Mocha",
      sold: "60 Cup",
      profit: "IDR 3.000.000",
    },
    {
      no: 8,
      name: "Dark Roast Delight",
      sold: "50 Cup",
      profit: "IDR 2.000.000",
    },
    {
      no: 9,
      name: "Ethiopian Yirgacheffe Euphoria",
      sold: "40 Cup",
      profit: "IDR 1.000.000",
    },
    {
      no: 10,
      name: "Indonesian Sumatra Reserve",
      sold: "30 Cup",
      profit: "IDR 500.000",
    },
  ];
  return (
    <>
      <main className='pt-6 pr-20 pl-9 pb-16 grid grid-cols-1 gap-6'>
        <section className='grid grid-cols-3 gap-5'>
          <article className='bg-[#6FC276] text-[#FFFFFF] flex flex-col gap-4 py-4 px-6 rounded-md'>
            <div className='flex gap-2 items-center '>
              <img
                src='src/assets/img/icon/OrderOnProgress.svg'
                alt='icon progress'
              />
              <span className='font-semibold text-base'>Order On Progress</span>
            </div>
            <div className='flex gap-2.5 items-center'>
              <span className='font-semibold text-2xl'>200</span>
              <span className='font-normal text-xs'>+11.01%</span>
              <img src='src/assets/img/icon/up.svg' alt='icon up arrow rise' />
            </div>
          </article>

          <article className='bg-[#6C69D4] text-[#FFFFFF] flex flex-col gap-4 py-4 px-6 rounded-md'>
            <div className='flex gap-2 items-center '>
              <img
                src='src/assets/img/icon/OrderShipping.svg'
                alt='icon  truck shipping'
              />
              <span className='font-semibold text-base'>Order Shipping</span>
            </div>
            <div className='flex gap-2.5 items-center'>
              <span className='font-semibold text-2xl'>200</span>
              <span className='font-normal text-xs'>+11.01%</span>
              <img src='src/assets/img/icon/up.svg' alt='icon up arrow rise' />
            </div>
          </article>

          <article className='bg-[#C56FBC] text-[#FFFFFF] flex flex-col gap-4 py-4 px-6 rounded-md'>
            <div className='flex gap-2 items-center '>
              <img
                src='src/assets/img/icon/OrderDone.svg'
                alt='icon people done'
              />
              <span className='font-semibold text-base'>Order Done</span>
            </div>
            <div className='flex gap-2.5 items-center'>
              <span className='font-semibold text-2xl'>200</span>
              <span className='font-normal text-xs'>+11.01%</span>
              <img src='src/assets/img/icon/up.svg' alt='icon up arrow rise' />
            </div>
          </article>
        </section>
        <section className="w-full overflow-x-auto font-['Plus_Jakarta_Sans'] border border-[#E8E8E8] rounded-2xl p-6">
          <table className='w-full border-collapse'>
            <thead>
              <tr>
                <th className='p-3 text-left font-medium'>No</th>
                <th className='p-3 text-left font-medium'>Nama Produk</th>
                <th className='p-3 text-left font-medium'>Terjual</th>
                <th className='p-3 text-left font-medium'>Keuntungan</th>
              </tr>
            </thead>

            <tbody>
              {dataProduk.map((item) => (
                <tr key={item.no} className='odd:bg-[#e8e8e84d]'>
                  <td className='p-3'>{item.no}</td>
                  <td className='p-3'>{item.name}</td>
                  <td className='p-3'>{item.sold}</td>
                  <td className='p-3 font-semibold text-green-500'>
                    {item.profit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default AdmindDashboard;
