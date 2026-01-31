import Input from "../components/Input";
import baristaWomen from "../assets/img/barista-woman.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const validation = yup.object({
  email: yup
    .string()
    .lowercase()
    .required("Email wajib diisi")
    .email("format email tidak valid"),

  password: yup.string().required("password wajib diisi"),
});

function Login() {
  const [loginError, setLoginError] = useState("");

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validation),
  });

  const navigate = useNavigate();

  const formSubmit = (nilai) => {
    const user = users.find((item) => {
      return item.email === nilai.email && item.password === nilai.password;
    });

    if (!user) {
      setLoginError("email atau password salah");
      return;
    }

    navigate("/");
  };
  return (
    <div className='flex'>
      <div className='hidden sm:block w-[40%] '>
        <img
          src={baristaWomen}
          alt='barista woman background image'
          className='object-cover w-full h-full '
        />
      </div>

      <main className='font-[Plus_Jakarta_Sans,sans-serif] flex-1 py-12 px-5 sm:pr-32 sm:pl-16'>
        <header>
          <div className='flex items-center gap-2 mb-8'>
            <img src='./src/assets/img/icon/Frame.svg' alt='icon coffie' />
            <span className='font-[Sacramento,cursive]'>Coffee Shop</span>
          </div>
          <h1 className='text-[#8E6447] font-semibold text-2xl'>Login</h1>
          <p className='my-4'>Fill out the form correctly</p>
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
          </div>

          <div>
            <Input
              label='Password'
              htmlFor='password'
              id='password'
              placeholder='Enter Your Password'
              src='src\assets\img\icon\Password.svg'
              alt='icon password'
              {...register("password")}
              type='password'
            />
            {formState.errors.password && (
              <p className='text-red-700'>
                {formState.errors.password.message}
              </p>
            )}
            {loginError && <p className='text-red-700'>{loginError}</p>}
          </div>

          <div className='flex justify-end'>
            <span className=' text-[#ff8906]'>
              <Link to='/forgot-password'>Forgot Password</Link>
            </span>
          </div>

          <Button type='submit'>Login</Button>
        </form>

        <footer className='text-center my-6 text-base text-[#4f5665]'>
          <p>
            Not Have An Account?
            <Link to='/signup'>
              <span className='decoration-none text-[#ff8906]' href=''>
                Register
              </span>
            </Link>
          </p>
        </footer>

        <div className='text-center flex justify-center gap-12 items-center'>
          <div className='border-b border-[#aaaaaa] flex-2'></div>
          <span className='text-[#aaaaaa]'>Or</span>
          <div className='border-b border-[#aaaaaa] flex-2'></div>
        </div>

        <div className='mt-6 text-center flex justify-center items-center gap-8 '>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            className='flex items-center gap-2 bg-white rounded-2xl px-6 py-4 text-[#4f5665] font-medium text-lg shadow-[0_4px_10px_rgba(0,0,0,0.08)] md:px-28 md:py-5'
          >
            <img
              src='
            src\assets\img\icon\facebook.svg
            '
              alt='facebook icon'
            />
            <span className='hidden sm:inline'>Facebook</span>
          </a>
          <a
            href='https://www.google.com/'
            target='_blank'
            className='flex items-center gap-2 bg-white rounded-2xl px-6 py-4 text-[#4f5665] font-medium text-lg shadow-[0_4px_10px_rgba(0,0,0,0.08)]  md:px-28 md:py-5'
          >
            <img src='src/assets/img/icon/google.svg' alt='google icon' />
            <span className='hidden md:inline'>Google</span>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Login;
