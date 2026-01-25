import Input from "../components/Input";
import customerWoman from "../assets/img/image-women.png";
import Button from "../components/Button";
// C:\Koda6\koda-b6-react\src\assets\img\image-women.png

function ForgotPassword() {
  return (
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
        <form className='flex flex-col gap-6'>
          <Input
            label='Email'
            htmlFor='email'
            id='email'
            placeholder='Enter Your Email'
            src='src\assets\img\icon\mail.svg'
            alt='icon email'
          />

          <Button>Submit</Button>
        </form>
      </main>
    </div>
  );
}

export default ForgotPassword;
