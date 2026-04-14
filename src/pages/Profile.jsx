import React from "react";

import PotoProfile from "../assets/img/poto.jpg";
import Input from "../components/Input";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updateProfile } from "../redux/reduces/authReducer";
import http from "../lib/http";

function Profile() {
  const dispatch = useDispatch();
  const {currentUser}= useSelector((state) => state.auth);

  const {register, handleSubmit,reset} = useForm();  

  const fileRef = React.useRef();

  React.useEffect(()=> {
    if(currentUser) {
      reset(
        {
          fullName:currentUser.fullName,
          email: currentUser.email,
          phone: currentUser.phone,
          address: currentUser.address,
        }

      );
    }
  }, [currentUser,reset]);

  const onSubmit = async (formInput) => {
    try {
      const res = await http(
        "/users/profile",
        JSON.stringify({
          full_name: formInput.fullName,
          email: formInput.email,
          phone: formInput.phone,
          address: formInput.address,
        }),
        { method: "PATCH" }
      );

      const result = await res.json();

      if (!res.ok) {
        alert("update gagal");
        return;
      }

      dispatch(updateProfile({
        fullName: formInput.fullName,
        email: formInput.email,
        phone: formInput.phone,
        address: formInput.address
      }));

    } catch (err) {
      console.log(err);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {return;}

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await http("/users/upload", formData, {
        method: "POST",
      });

      const result = await res.json();

      if (!res.ok) {
        alert("upload gagal");
        return;
      }

      dispatch(updateProfile({
        ...currentUser,
        profilePic: result.result
      }));

    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <main className="px-5 pt-9 pb-8 md:pt-[78px]  m:pb-[50px] sm:px-24 md:px-32 font-['Plus_Jakarta_Sans']">
        <h1 className='text-[#0b0909] text-4xl md:text-5xl font-medium'>
          Profile
        </h1>
        <div className='container-profile grid gap-5 grid-cols-1 md:grid-cols-[auto_1fr] items-stretch'>
          <section className=' border border-[#e8e8e8] p-6 flex flex-col gap-3 items-center self-start'>
            <h4 className='text-xl font-medium text-[#0b132a]'>
              {currentUser?.fullName || "No Name"}
            </h4>
            <span className='font-normal text-xl text-[#4f5665]'>
              {currentUser?.email || "No Email"}
            </span>
            <div className=' w-[110px] h-[110px] md:w-[170px] md:-[170px]'>
              <img
                className='rounded-full w-full h-full object-cover'
                src={currentUser?.profilePic
                  ? import.meta.env.VITE_BASE_URL + currentUser.profilePic.replace("./", "/")
                  : PotoProfile}
                alt='profile image'
              />
            </div>
            <button onClick={() => fileRef.current.click()} className='text-sm font-medium text-[#0b132a] bg-[#ff8906] rounded-md px-12 py-3'>
              Upload New Photo
            </button>
            <input
              type="file"
              ref={fileRef}
              style={{ display: "none" }}
              onChange={handleUpload}
            />
            <span className='text-[#4f5665] font-semibold text-base'>
              Since {currentUser?.createdAt
                ? new Date(currentUser.createdAt).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
                : "-"}
            </span>
          </section>
          <section>
            <form onSubmit={handleSubmit(onSubmit)} className='border border-[#e8e8e8] flex flex-col gap-6 px-12 pt-6 pb-10'>
              <Input
                htmlFor='fullName'
                label='Full Name'
                id='fullName'
                src='./src/assets/img/icon/Profile.svg'
                alt='icon profile'
                type='text'
                {...register("fullName")}
              />
              <Input
                label='Email'
                htmlFor='email'
                id='email'
                src='src\assets\img\icon\mail.svg'
                alt='icon email'
                type='email'
                {...register("email")}
              />
              <Input
                label='Phone'
                htmlFor='phone'
                id='phone'
                src='src\assets\img\icon\PhoneCall.svg'
                alt='icon phone'
                type='number'
                {...register("phone")}

              />
              <Input
                label='Password'
                htmlFor='password'
                id='password'
                src='src\assets\img\icon\Password.svg'
                alt='icon password'
                type='password'
                disabled
              />
              <Input
                label='Address'
                htmlFor='address'
                id='address'
                src='src\assets\img\icon\location.svg'
                alt='icon address'
                type='text'
                {...register("address")}
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
