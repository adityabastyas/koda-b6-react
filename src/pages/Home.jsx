import React from "react";

function Home() {
  return (
    <div>
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
      </main>
    </div>
  );
}

export default Home;
