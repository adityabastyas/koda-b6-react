import React from "react";

import coffeTree from "../assets/img/Rectangle299.png";
import CartMenu from "../components/CartMenu.jsx";
import image43 from "../assets/img/image43.svg";
import image46 from "../assets/img/image46.svg";
import { DataContext } from "../components/DataProvider.jsx";
import { useNavigate } from "react-router-dom";

function Products() {
  const { data, loading } = React.useContext(DataContext);

  const navigate = useNavigate();

  const goToDetail = (item) => {
    localStorage.setItem("product", JSON.stringify(item));

    const slug = item.name.split(" ").join("-").toLowerCase();

    navigate(`/detail-product/${item.id}/${slug}`);
  };

  return (
    <>
      <section>
        <div className='w-full relative mb-12 bg-cover bg-center bg-no-repeat'>
          <img
            src={coffeTree}
            alt='background coffe image'
            className='w-full'
          />
          <h1 className='absolute inset-0 flex items-center justify-center font-[Plus_Jakarta_Sans] text-white font-medium text-5xl top-[92px] left-[130px] '>
            We Provide Good Coffee and Healthy Meals
          </h1>
        </div>
      </section>

      <main>
        <section className='w-full py-10'>
          <header className='flex items-center justify-between mb-6 px-32'>
            <h2 className='text-5xl font-medium'>
              Today <span className='text-[#8e6447]'>Promo</span>
            </h2>

            <nav className='flex items-center gap-2'>
              <img
                src='src/assets/img/icon/arrow-left.svg'
                alt='Previous promo button'
                className='bg-[#e8e8e8] p-3 rounded-full cursor-pointer'
              />
              <img
                src='src/assets/img/icon/arrow-right.svg'
                alt='Next promo button'
                className='bg-[#ff8906] p-3 rounded-full cursor-pointer'
              />
            </nav>
          </header>

          <div className='flex overflow-x-auto gap-6 px-32 pb-2 scroll-smooth snap-x snap-mandatory no-scrollbar'>
            <article className='snap-start bg-[#88b788] rounded-r-2xl  flex items-start p-3 shrink-0'>
              <img src={image46} alt="Mother's Day special promo" />
              <div className='ml-2 w-[195px]'>
                <h3 className='text-sm font-bold'>HAPPY MOTHER’S DAY!</h3>
                <p className='text-sm'>
                  Get one of our favorite menu for free!
                </p>
                <a className='text-white text-sm cursor-pointer'>Klaim Kupon</a>
              </div>
            </article>

            <article className='snap-start bg-[#88b788] rounded-2xl flex items-start p-3 shrink-0'>
              <img src={image46} alt="Mother's Day special promo" />
              <div className='ml-2 w-[195px]'>
                <h3 className='text-sm font-bold'>HAPPY MOTHER’S DAY!</h3>
                <p className='text-sm'>
                  Get one of our favorite menu for free!
                </p>
                <a className='text-white text-sm cursor-pointer'>Klaim Kupon</a>
              </div>
            </article>

            <article className='snap-start bg-[#88b788] rounded-2xl flex items-start p-3 shrink-0'>
              <img src={image46} alt="Mother's Day special promo" />
              <div className='ml-2 w-[195px]'>
                <h3 className='text-sm font-bold'>HAPPY MOTHER’S DAY!</h3>
                <p className='text-sm'>
                  Get one of our favorite menu for free!
                </p>
                <a className='text-white text-sm cursor-pointer'>Klaim Kupon</a>
              </div>
            </article>

            <article className='snap-start bg-[#f5c361] rounded-l-2xl  flex items-start p-3 shrink-0'>
              <img src={image43} alt='Man Day special free' />
              <div className='ml-2 w-[195px]'>
                <h3 className='text-sm font-bold'>
                  Get a cup of coffee for free on sunday morning
                </h3>
                <p className='text-sm'>Only at 7 to 9 AM</p>
              </div>
            </article>
          </div>

          <img
            className='mt-6 ml-32'
            src='src/assets/img/icon/Group-1300.svg'
            alt='Promo carousel indicator dots'
          />
        </section>

        <section className='mt-6 mx-[127px] '>
          <h2 className="mb-[25px] font-['Plus_Jakarta_Sans'] text-5xl font-medium text-[#0b0909]">
            Our <span className='text-[#8e6447]'>Product</span>
          </h2>

          <section className='grid grid-cols-3'>
            <form className=' col-span-1  rounded-2xl bg-[#0b0909] p-6 text-white'>
              <header className='flex items-center justify-between'>
                <h4 className='text-[22px] font-semibold'>Filter</h4>
                <button
                  type='reset'
                  className='bg-transparent cursor-pointer text-lg font-bold text-white'
                >
                  Reset Filter
                </button>
              </header>

              <section className='mt-4'>
                <h5 className='text-lg font-bold'>Search</h5>
                <input
                  type='text'
                  placeholder='Search Your Product'
                  className='mt-2 mb-4 w-full border-4 bg-amber-50 border-[#dedede] px-5 text-black outline-none'
                />
              </section>

              <section>
                <h5 className='mb-4 text-lg font-bold'>Category</h5>

                <div className='mb-4 flex items-center gap-2 text-lg'>
                  <input
                    type='checkbox'
                    id='fav'
                    className='accent-[#ff8906]'
                  />
                  <label htmlFor='fav'>Favorite Product</label>
                </div>

                <div className='mb-4 flex items-center gap-2 text-lg'>
                  <input
                    type='checkbox'
                    id='coffee'
                    className='accent-[#ff8906]'
                  />
                  <label htmlFor='coffee'>Coffee</label>
                </div>

                <div className='mb-4 flex items-center gap-2 text-lg'>
                  <input
                    type='checkbox'
                    id='noncoffee'
                    className='accent-[#ff8906]'
                  />
                  <label htmlFor='noncoffee'>Non Coffee</label>
                </div>

                <div className='mb-4 flex items-center gap-2 text-lg'>
                  <input
                    type='checkbox'
                    id='foods'
                    className='accent-[#ff8906]'
                  />
                  <label htmlFor='foods'>Foods</label>
                </div>

                <div className='mb-4 flex items-center gap-2 text-lg'>
                  <input
                    type='checkbox'
                    id='addon'
                    className='accent-[#ff8906]'
                  />
                  <label htmlFor='addon'>Add-On</label>
                </div>
              </section>

              <section>
                <h5 className='mb-4 text-lg font-bold'>Sort by</h5>

                <div className='mb-4 flex items-center gap-2 text-lg'>
                  <input
                    type='checkbox'
                    id='buy1get1'
                    className='accent-[#ff8906]'
                  />
                  <label htmlFor='buy1get1'>Buy 1 get 1</label>
                </div>

                <div className='mb-4 flex items-center gap-2 text-lg'>
                  <input
                    type='checkbox'
                    id='flashsale'
                    className='accent-[#ff8906]'
                  />
                  <label htmlFor='flashsale'>Flash sale</label>
                </div>

                <div className='mb-4 flex items-center gap-2 text-lg'>
                  <input
                    type='checkbox'
                    id='birthday'
                    className='accent-[#ff8906]'
                  />
                  <label htmlFor='birthday'>Birthday Package</label>
                </div>

                <div className='mb-4 flex items-center gap-2 text-lg'>
                  <input
                    type='checkbox'
                    id='cheap'
                    className='accent-[#ff8906]'
                  />
                  <label htmlFor='cheap'>Cheap</label>
                </div>
              </section>

              <section>
                <h5 className='mb-4 text-lg font-bold'>Range Price</h5>

                <input
                  type='range'
                  min='0'
                  max='100'
                  defaultValue='50'
                  className='w-full accent-[#ff8906]'
                />

                <div className='mt-2 flex justify-between text-sm'>
                  <span>idr 374</span>
                  <span>idr 500</span>
                </div>
              </section>

              <button
                type='submit'
                className='mt-2 w-full rounded bg-[#ff8906] py-3 text-sm font-medium text-[#0b0909]'
              >
                Apply Filter
              </button>
            </form>
            <section className='col-span-2  grid grid-cols-2 gap-4'>
              {loading && (
                <p className='text-center text-5xl mt-20'>Mengambil Data...</p>
              )}

              {!loading && data?.products?.length === 0 && (
                <p className='text-center text-5xl mt-20'>Produk kosong</p>
              )}
              {data?.products?.slice(0, 6)?.map((item) => {
                return (
                  <div key={item.id}>
                    <CartMenu
                      image={item.image.imageSatu}
                      title={item.name}
                      description={item.description}
                      rating={5}
                      oldPrice={item.price}
                      price={item.discount}
                      onClick={() => goToDetail(item)}
                      showFlashSale={true}
                    />
                  </div>
                );
              })}
            </section>
          </section>
        </section>
      </main>
    </>
  );
}

export default Products;
