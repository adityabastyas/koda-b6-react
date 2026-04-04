import React from "react";
import Input from "../components/Input";
import backgroundCoffe from "../assets/img/Rectangle 289.png";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/reduces/authReducer";
import ModalLoading from "../components/ModalLoading";
import iconCoffee from "../assets/img/icon/Frame.svg";
import iconProfile from "../assets/img/icon/Profile.svg";
import iconMail from "../assets/img/icon/mail.svg";
import iconPassword from "../assets/img/icon/Password.svg";
import iconFacebook from "../assets/img/icon/facebook.svg";
import iconGoogle from "../assets/img/icon/google.svg";
import http from "../lib/http";

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
    .trim()
    .oneOf([yup.ref("password")], "password tidak sama")
    .required("confirm password wajib diisi"),
});

function Register() {
  const [show, setShow] = React.useState(false);
  const [registerError, setRegisterError] = React.useState("");


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

  const dispatch = useDispatch();

  const formSubmit = async (nilai) => {
    try {

      const rest = await http(
        "/auth/register",JSON.stringify({
          full_name: nilai.fullName,
          email: nilai.email,
          password: nilai.password
        }),{
          method: "POST",
          headers: {"Content-Type": "application/json"}
        }
      );

      const data = await rest.json();
      console.log(data);

      if (!rest.ok){
        setRegisterError(data.message);
        return;
      }

      dispatch(registerUser({
        fullname: nilai.fullName,
        email: nilai.email
      }));

      setShow(true);
      setTimeout(()=>{
        setShow(false);
        navigate("/signin");
      }, 2000);
      
    } catch (error) {
      console.log("error", error);
      setRegisterError("server tidak bisa di akses, coba lgi");
      
    }

    
  };
  return (
    <>
      <ModalLoading isOke={show} text='Register berhasil' />
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
              <img src={iconCoffee} alt='icon coffie' />
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
                src={iconProfile}
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
                src={iconMail}
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
                src={iconPassword}
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
                src={iconPassword}
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
                src={iconFacebook}
                alt='facebook icon'
              />
              <span className='hidden sm:inline'>Facebook</span>
            </a>
            <a
              href='https://www.google.com/'
              target='_blank'
              className='flex items-center gap-2 bg-white rounded-2xl px-6 py-4 text-[#4f5665] font-medium text-lg shadow-[0_4px_10px_rgba(0,0,0,0.08)]  md:px-28 md:py-5'
            >
              <img src={iconGoogle} alt='google icon' />
              <span className='hidden md:inline'>Google</span>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

export default Register;
