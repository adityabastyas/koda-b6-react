function Button(props) {
  const { children, className, ...rest } = props;
  return (
    <button
      {...rest}
      className={`bg-[#FF8906] cursor-pointer rounded-md py-4 w-full ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
