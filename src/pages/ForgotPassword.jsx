import React from "react";
import Input from "../components/Input";
import customerWoman from "../assets/img/image-women.png";
import Button from "../components/Button";
import ModalLoading from "../components/ModalLoading";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";

const validation = yup.object({
  email: yup
    .string()
    .lowercase()
    .required("Email wajib diisi")
    .email("format email tidak valid"),
});

function ForgotPassword() {
  const [show, setShow] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const users = useSelector((state) => state.auth.users);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(validation),
  });

  const formSubmit = (nilai) => {
    const valid = users.find((user) => user.email === nilai.email);

    if (!valid) {
      setErrorMessage("Email tidak terdaftar");
      return;
    }

    setErrorMessage("");
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <>
      <ModalLoading
        isOke={show}
        text='Silahkan cek email  untuk melihat password'
      />
      <div className='flex'>
        <div className='hidden sm:block w-[40%] '>
          <img
            src={customerWoman}
            alt='woman customer image'
            className='object-cover w-full h-full '
          />
        </div>

        <main className='font-[Plus_Jakarta_Sans,sans-serif] flex-1 py-12 px-5 sm:pr-32 sm:pl-16 items-center sm:pt-80'>
          <header>
            <div className='flex items-center gap-2 mb-8'>
              <img src='./src/assets/img/icon/Frame.svg' alt='icon coffie' />
              <span className='font-[Sacramento,cursive]'>Coffee Shop</span>
            </div>
            <h1 className='text-[#8E6447] font-semibold text-2xl'>
              Fill out the form correctly
            </h1>
            <p className='my-4'>We will send new password to your email</p>
          </header>
          <form
            onSubmit={handleSubmit(formSubmit)}
            className='flex flex-col gap-6'
          >
            <div>
              <Input
                label='Email'
                htmlFor='email'
                id='email'
                placeholder='Enter Your Email'
                src='src\assets\img\icon\mail.svg'
                alt='icon email'
                {...register("email")}
              />
              {formState.errors.email && (
                <p className='text-red-700'>{formState.errors.email.message}</p>
              )}
              {errorMessage && <p className='text-red-700'>{errorMessage}</p>}
            </div>

            <Button>Submit</Button>
          </form>
        </main>
      </div>
    </>
  );
}

export default ForgotPassword;
