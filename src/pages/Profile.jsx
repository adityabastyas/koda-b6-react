import React from "react";

import PotoProfile from "../assets/img/poto.jpg";
import Input from "../components/Input";
import Button from "../components/Button";

function Profile() {
  return (
    <>
      <main className="px-5 pt-9 pb-8 md:pt-[78px]  m:pb-[50px] sm:px-24 md:px-32 font-['Plus_Jakarta_Sans']">
        <h1 className='text-[#0b0909] text-4xl md:text-5xl font-medium'>
          Profile
        </h1>
        <div className='container-profile grid gap-5 grid-cols-1 md:grid-cols-[auto_1fr] items-stretch'>
          <section className=' border border-[#e8e8e8] p-6 flex flex-col gap-3 items-center self-start'>
            <h4 className='text-xl font-medium text-[#0b132a]'>
              Aditya Bastyas Mulya
            </h4>
            <span className='font-normal text-xl text-[#4f5665]'>
              adityabastyas@gmail.com
            </span>
            <div className=' w-[110px] h-[110px] md:w-[170px] md:-[170px]'>
              <img
                className='rounded-full w-full h-full object-cover'
                src={PotoProfile}
                alt='profile image'
              />
            </div>
            <button className='text-sm font-medium text-[#0b132a] bg-[#ff8906] rounded-md px-12 py-3'>
              Upload New Photo
            </button>
            <span className='text-[#4f5665] font-semibold text-base'>
              Since 20 January 2022
            </span>
          </section>
          <section>
            <form className='border border-[#e8e8e8] flex flex-col gap-6 px-12 pt-6 pb-10'>
              <Input
                htmlFor='fullName'
                label='Full Name'
                id='fullName'
                placeholder='Aditya Bastyas Mulya'
                src='./src/assets/img/icon/Profile.svg'
                alt='icon profile'
                type='text'
              />
              <Input
                label='Email'
                htmlFor='email'
                id='email'
                placeholder='adityabastyas@gmail.com'
                src='src\assets\img\icon\mail.svg'
                alt='icon email'
                type='email'
              />
              <Input
                label='Phone'
                htmlFor='phone'
                id='phone'
                placeholder='0822-4921-4556'
                src='src\assets\img\icon\PhoneCall.svg'
                alt='icon phone'
                type='number'
              />
              <Input
                label='Password'
                htmlFor='password'
                id='password'
                src='src\assets\img\icon\Password.svg'
                alt='icon password'
                type='password'
                value='nananininananini'
              />
              <Input
                label='Address'
                htmlFor='address'
                id='address'
                placeholder='Tokyo Japan'
                src='src\assets\img\icon\location.svg'
                alt='icon address'
                type='text'
              />
              <Button>Submit</Button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Profile;
