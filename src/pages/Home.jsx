import React from "react";
import CartMenu from "../components/CartMenu";
import locationMap from "../assets/img/location.png";
import testimonialMan from "../assets/img/testimonial-man.png";
import { DataContext } from "../components/DataProvider";

function Home() {
  const { data, loading } = React.useContext(DataContext);

  const testimonial = data?.testimonials || [];

  const ref = React.useRef(0);

  const [testi, setTesti] = React.useState(null);

  React.useEffect(() => {
    if (testimonial.length > 0) {
      setTesti(testimonial[0]);
    }
  }, [testimonial]);

  const next = () => {
    ref.current++;

    if (ref.current >= testimonial.length) {
      ref.current = 0;
    }

    setTesti(testimonial[ref.current]);
  };

  const prev = () => {
    ref.current--;

    if (ref.current < 0) {
      ref.current = testimonial.length - 1;
    }

    setTesti(testimonial[ref.current]);
  };

  return (
    <>
      <main>
        <section className='flex'>
          <section className='w-1/2 h-[1024px] bg-gradient-to-b from-[#777c82] to-[#0b0909] pt-72 pr-20 pl-32 overflow-hidden'>
            <div>
              <h1 className='text-white font-[Plus_Jakarta_Sans] font-medium text-5xl'>
                Start Your Day with Coffee and Good Meals
              </h1>

              <p className='text-white font-[Plus_Jakarta_Sans] text-[16px] font-normal my-6'>
                We provide high quality beans, good taste, and healthy meals
                made by love just for you. Start your day with us for a bigger
                smile!
              </p>

              <div className='bg-[#ff8906] px-8 py-4 rounded-md w-fit'>
                <a
                  href=''
                  className='text-[#0b132a] text-[14px] font-medium font-[Plus_Jakarta_Sans]'
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className='flex mt-6'>
              <div className='flex flex-col pr-8 border-r border-white w-[110px]'>
                <span className='text-[#ff8906] text-5xl font-medium font-[Plus_Jakarta_Sans]'>
                  90+
                </span>
                <span className='text-white font-normal text-[16px] font-[Plus_Jakarta_Sans] mt-3'>
                  Staf
                </span>
              </div>

              <div className='flex flex-col pr-[35px] border-r border-white w-[110px] ml-8'>
                <span className='text-[#ff8906] text-[48px] font-medium font-[Plus_Jakarta_Sans]'>
                  30+
                </span>
                <span className='text-white font-normal text-[16px] font-[Plus_Jakarta_Sans] mt-[12px]'>
                  Stores
                </span>
              </div>

              <div className='flex flex-col ml-8'>
                <span className='text-[#ff8906] text-5xl font-medium font-[Plus_Jakarta_Sans]'>
                  800+
                </span>
                <span className='text-white font-normal text-base font-[Plus_Jakarta_Sans] mt-3'>
                  Customer
                </span>
              </div>
            </div>
          </section>

          <section className='w-1/2 h-[1024px] '>
            <img
              src='\src\assets\img\bg-expresso.jpg'
              alt='background image expresso'
              className='w-full h-full object-cover'
            />
          </section>
        </section>

        <section className='flex w-full'>
          <section className='w-1/2 pt-14 pr-16 pl-32'>
            <article>
              <h2 className='text-[#0b132a] text-5xl font-medium font-[Plus_Jakarta_Sans] mb-6'>
                We Provide <span className='text-[#8e6447]'>Good Coffee</span>
                and <span className='text-[#8e6447]'>Healthy Meals</span>
              </h2>

              <p className='text-[#4f5665] text-base font-normal font-[Plus_Jakarta_Sans]'>
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>

              <section className='mt-6'>
                <ul className='flex flex-col gap-6'>
                  <li className='flex items-center text-[#4f5665] text-[14px] font-normal font-[Rubik]'>
                    <img
                      src='src/assets/img/icon/check-icon.svg'
                      alt='check icon'
                      className='mr-3'
                    />
                    High quality beans
                  </li>

                  <li className='flex items-center text-[#4f5665] text-sm font-normal font-[Rubik]'>
                    <img
                      src='src/assets/img/icon/check-icon.svg'
                      alt='check icon'
                      className='mr-3'
                    />
                    Healthy meals, you can request the ingredients
                  </li>

                  <li className='flex items-center text-[#4f5665] text-sm font-normal font-[Rubik]'>
                    <img
                      src='src/assets/img/icon/check-icon.svg'
                      alt='check icon'
                      className='mr-3'
                    />
                    Chat with our staff to get better experience for ordering
                  </li>

                  <li className='flex items-center text-[#4f5665] text-sm font-normal font-[Rubik]'>
                    <img
                      src='src/assets/img/icon/check-icon.svg'
                      alt='check icon'
                      className='mr-3'
                    />
                    Free member card with a minimum purchase of IDR 200.000.
                  </li>
                </ul>
              </section>
            </article>
          </section>

          <section className='w-1/2 flex justify-center items-start'>
            <img
              src='src/assets/img/barista-man.png'
              alt='Professional barista Coffee Shop'
              className='max-w-full h-auto'
            />
          </section>
        </section>

        <section className='w-full text-center pt-20 mb-20'>
          <h2 className='text-[#0b132a] font-[Plus_Jakarta_Sans] font-medium text-5xl'>
            Here is People’s <span className='text-[#8e6447]'>Favorite</span>
          </h2>

          <div className='w-16 h-1.5 bg-[#ff8906] mx-auto my-6'></div>

          <p className='text-[#4f5665] font-[Plus_Jakarta_Sans] font-normal text-base mb-[60px]'>
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </p>
          <div className='grid grid-cols-4 gap-8 px-32'>
            {loading && (
              <p lassName='text-center text-5xl mt-20'>Mengambil Data...</p>
            )}

            {!loading && data?.products?.length === 0 && (
              <p lassName='text-center text-5xl mt-20'>Produk kosong</p>
            )}
            {data?.products?.slice(0, 4)?.map((item) => {
              return (
                <div key={item.id}>
                  <CartMenu
                    image={item.image.imageSatu}
                    title={item.name}
                    description={item.description}
                    rating={5}
                    oldPrice={item.price}
                    price={item.discount}
                    showFlashSale={true}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <section className='text-center bg-[#e8e8e84d] pt-11 pb-24'>
          <h3 className="text-[#0b132a] font-[500] text-5xl font-['Plus_Jakarta_Sans']">
            <span className='text-[#8e6447]'>Visit Our Store</span> in the Spot
            on the Map Below
          </h3>

          <div className='w-[68px] h-1.5 bg-[#ff8906] my-6 mx-auto'></div>

          <p className="text-[#4f5665] font-[400] text-base mb-[60px] font-['Plus_Jakarta_Sans']">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>

          <div>
            <img
              src={locationMap}
              alt='Map showing Coffee Shop'
              className='mx-auto'
            />
          </div>
        </section>

        {testi && (
          <section className='w-full h-[600px] bg-gradient-to-br from-[#777c82] to-[#0b0909] px-[100px] py-[40px] mb-[70px]'>
            <div className='flex justify-center items-center'>
              <figure className='w-[500px] h-[400px] flex items-center justify-center'>
                <img
                  src={testi.img}
                  alt={testi.name}
                  className='w-full h-full object-cover'
                />
              </figure>

              <article className='w-[490px] ml-5'>
                <span className="block text-base font-normal text-white font-['Plus_Jakarta_Sans'] mb-6">
                  Testimonial
                </span>

                <h2 className="text-[48px] font-normal text-white font-['Plus_Jakarta_Sans'] my-6 border-l-[7px] border-[#ff8906] pl-5">
                  {testi.name}
                </h2>

                <span className="block text-[#ff8906] text-base font-normal font-['Plus_Jakarta_Sans']">
                  {testi.role}
                </span>

                <p className="text-basae font-normal text-white font-['Plus_Jakarta_Sans'] my-6">
                  {testi.text}
                </p>

                <div className='flex items-center mb-6'>
                  <img
                    className='mr-6'
                    src='src/assets/img/icon/start.svg'
                    alt='star'
                  />
                  <img
                    className='mr-6'
                    src='src/assets/img/icon/start.svg'
                    alt='star'
                  />
                  <img
                    className='mr-6'
                    src='src/assets/img/icon/start.svg'
                    alt='star'
                  />
                  <img
                    className='mr-6'
                    src='src/assets/img/icon/start.svg'
                    alt='star'
                  />
                  <img
                    className='mr-6'
                    src='src/assets/img/icon/start.svg'
                    alt='star'
                  />

                  <span className="text-white text-base font-normal font-['Plus_Jakarta_Sans']">
                    {testi.rating}
                  </span>
                </div>

                <nav className='flex items-center mb-6'>
                  <button onClick={prev}>
                    <img
                      src='src/assets/img/icon/arrow-left.svg'
                      alt='arrow-left'
                      className='bg-white p-3.5 rounded-full mr-2 cursor-pointer'
                    />
                  </button>
                  <button onClick={next}>
                    <img
                      src='src/assets/img/icon/arrow-right.svg'
                      alt='arrow-right'
                      className='bg-[#ff8906] p-3.5 rounded-full cursor-pointer'
                    />
                  </button>
                </nav>

                <div className='flex gap-2'>
                  <span className='w-6 h-2 bg-[#ff8906] rounded-lg'></span>
                  <span className='w-6 h-2 bg-[#dde0e4] rounded-full'></span>
                  <span className='w-6 h-2 bg-[#dde0e4] rounded-full'></span>
                  <span className='w-6 h-2 bg-[#dde0e4] rounded-full'></span>
                </div>
              </article>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default Home;
