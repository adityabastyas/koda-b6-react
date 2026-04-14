import React from "react";
import Input from "../components/Input";
import customerWoman from "../assets/img/image-women.png";
import Button from "../components/Button";
import ModalLoading from "../components/ModalLoading";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";
import iconCoffee from "../assets/img/icon/Frame.svg";
import iconMail from "../assets/img/icon/mail.svg";
import http from "../lib/http";
import { useNavigate } from "react-router-dom";


const validation = yup.object({
  email: yup.string().when("$step", {
    is: 1,
    then: (schema) =>
      schema
        .required("Email wajib diisi")
        .email("format email tidak valid"),
  }),
  code: yup.string().when("$step", {
    is: 2,
    then: (schema) => schema.required("Code wajib diisi"),
  }),
  new_password: yup.string().when("$step", {
    is: 2,
    then: (schema) =>
      schema.required("Password wajib diisi").min(6),
  }),
});

function ForgotPassword() {
  const [show, setShow] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const users = useSelector((state) => state.auth.users);

  const [step, setStep] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [modalText, setModalText] = React.useState("");

  const navigate = useNavigate();
  

  const { register, handleSubmit, formState } = useForm({
    context: { step },
    resolver: yupResolver(validation),
  });

  const formSubmit = async (nilai) => {
    try {
      if (step === 1) {
        const res = await http(
          "/auth/forgot-password",
          JSON.stringify({
            email: nilai.email,
          }),
          {
            method: "POST",
          }
        );

        const json = await res.json();

        if (!json.success) {
          setErrorMessage(json.message);
          return;
        }

        setEmail(nilai.email);
        setStep(2);
        setErrorMessage("");

        setModalText("Kode berhasil dikirim");
        setShow(true);

        setTimeout(() => {
          setShow(false);
        }, 3000);
      } else {
        const res = await http(
          `/auth/forgot-password?email=${email}`,
          JSON.stringify({
            code: nilai.code,
            new_password: nilai.new_password,
          }),
          {
            method: "PATCH",
          }
        );

        const json = await res.json();

        if (!json.success) {
          setErrorMessage(json.message);
          return;
        }

        setModalText("Password berhasil diubah");
        setShow(true);

        setTimeout(() => {
          setShow(false);
          navigate("/signin");
        }, 3000);
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("Terjadi kesalahan");
    }
  };

  return (
    <>
      <ModalLoading
        isOke={show}
        text={modalText}
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
              <img src={iconCoffee} alt='icon coffie' />
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
            {step === 1 && (
              <div>
                <Input
                  label='Email'
                  id='email'
                  placeholder='Enter Your Email'
                  src={iconMail}
                  {...register("email")}
                />
                {formState.errors.email && (
                  <p className='text-red-700'>
                    {formState.errors.email.message}
                  </p>
                )}
              </div>
            )}

            {step === 2 && (
              <>
                <div>
                  <Input
                    label='Code OTP'
                    id='code'
                    placeholder='Enter Code'
                    {...register("code")}
                  />
                  {formState.errors.code && (
                    <p className='text-red-700'>
                      {formState.errors.code.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    label='New Password'
                    type='password'
                    id='new_password'
                    placeholder='Enter New Password'
                    {...register("new_password")}
                  />
                  {formState.errors.new_password && (
                    <p className='text-red-700'>
                      {formState.errors.new_password.message}
                    </p>
                  )}
                </div>
              </>
            )}

            <Button type='submit'>
              {step === 1 ? "Send Code" : "Reset Password"}
            </Button>
          </form>
        </main>
      </div>
    </>
  );
}

export default ForgotPassword;
