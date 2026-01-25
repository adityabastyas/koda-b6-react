function Button(props) {
  const { children, onClick } = props;
  return (
    <button onClick={onClick} className='bg-[#FF8906] rounded-md py-4 w-full'>
      {children}
    </button>
  );
}

export default Button;
