import Input from "../components/Input";
import backgroundCoffe from "../assets/img/Rectangle 289.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validation = yup.object({
  fullName: yup.string().required("full name wajib diisi"),

  email: yup
    .string()
    .lowercase()
    .required("Email wajib diisi")
    .email("format email tidak valid"),

  password: yup
    .string()
    .required("password wajib diisi")
    .min(5, "password minimal 5 karacter"),

  confirmPassword: yup
    .string()
    .required("confirm password wajib diisi")
    .oneOf([yup.ref("password")], "password tidak sama"),
});

function Register() {
  const [registerHistory, setRegisterHistory] = useState([]);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      confirmPassword: "",
    },
    resolver: yupResolver(validation),
  });

  const navigate = useNavigate();

  const formSubmit = (nilai) => {
    console.log(nilai);
    navigate("/signin");
  };
  return (
    <div className='flex'>
      <div className='hidden sm:block w-[40%] '>
        <img
          src={backgroundCoffe}
          alt='cooffe bg image'
          className='object-cover w-full h-full '
        />
      </div>

      <main className='font-[Plus_Jakarta_Sans,sans-serif] flex-1 py-12 px-5 sm:pr-32 sm:pl-16'>
        <header>
          <div className='flex items-center gap-2 mb-8'>
            <img src='./src/assets/img/icon/Frame.svg' alt='icon coffie' />
            <span className='font-[Sacramento,cursive]'>Coffee Shop</span>
          </div>
          <h1 className='text-[#8E6447] font-semibold text-2xl'>Register</h1>
          <p className='my-4'>Fill out the form correctly</p>
        </header>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className='flex flex-col gap-6'
        >
          <div>
            <Input
              htmlFor='fullName'
              label='Full Name'
              id='fullName'
              placeholder='Enter Your Full Name'
              src='./src/assets/img/icon/Profile.svg'
              alt='icon profile'
              {...register("fullName")}
            />
            {formState.errors.fullName && (
              <p className='text-red-700'>
                {formState.errors.fullName.message}
              </p>
            )}
          </div>

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
              type='password'
              {...register("password")}
            />
            {formState.errors.password && (
              <p className='text-red-700'>
                {formState.errors.password.message}
              </p>
            )}
          </div>

          <div>
            <Input
              label='Confirm Password'
              htmlFor='confirmPassword'
              id='confirmPassword'
              placeholder='Enter Your Password Again'
              src='src\assets\img\icon\Password.svg'
              alt='icon password'
              type='password'
              {...register("confirmPassword")}
            />
            {formState.errors.confirmPassword && (
              <p className='text-red-700'>
                {formState.errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button type='submit'>Register</Button>
        </form>

        <footer className='text-center my-6 text-base text-[#4f5665]'>
          <p>
            Have An Account?
            <span className='decoration-none text-[#ff8906]'>
              <Link to='/signin'>Login</Link>
            </span>
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

export default Register;
