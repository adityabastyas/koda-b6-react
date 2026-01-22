function Input(props) {
  const {
    htmlFor,
    type,
    name,
    label,
    id,
    value,
    src,
    placeholder,
    alt,
    onChange,
  } = props;
  return (
    <label htmlFor={htmlFor} className='flex flex-col gap-3'>
      <p className='text-base font-semibold text-[#0B132A]'>{label}</p>
      <div className='border flex rounded py-4 px-3 gap-2 bg-[#FCFDFE] border-[#DEDEDE] rounded-lg'>
        <img src={src} alt={alt} />
        <input
          type={type}
          id={id}
          onChange={onChange}
          name={name}
          value={value}
          placeholder={placeholder}
          className='outline-none text-xs text-[#4F5665]'
        />
      </div>
    </label>
  );
}

export default Input;
