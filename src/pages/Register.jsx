import Input from "../components/Input";

function Register() {
  return (
    <div>
      <form>
        <Input
          label='Full Name'
          placeholder='Enter Your Full Name'
          src='src\assets\img\icon\Profile.svg'
        />
        <Input
          label='Email'
          placeholder='Enter Your Email'
          src='src\assets\img\icon\mail.svg'
        />
        <Input
          label='Password'
          placeholder='Enter Your Password'
          src='src\assets\img\icon\Password.svg'
        />
        <Input
          label='Confirm Password'
          placeholder='Enter Your Password Again'
          src='src\assets\img\icon\Password.svg'
        />
      </form>
    </div>
  );
}

export default Register;
