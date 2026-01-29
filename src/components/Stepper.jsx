import React from "react";

function Stepper() {
  const [step, setStep] = React.useState(1);

  const jumlahStep = 4;

  const klikNext = () => {
    if (step < jumlahStep) {
      setStep(step + 1);
    }
  };
  return (
    <>
      <div className='flex justify-center items-center gap-5 mt-12'>
        {/* Tampilkan step  */}
        <span
          className={`w-12 h-12 rounded-full flex items-center justify-center font-medium ${step === 1 ? "bg-[#ff8906] text-black" : "bg-gray-200 text-gray-400"}`}
        >
          1
        </span>

        <span
          className={`w-12 h-12 rounded-full flex items-center justify-center font-medium ${step === 2 ? "bg-[#ff8906] text-black" : "bg-gray-200 text-gray-400"}`}
        >
          2
        </span>

        <span
          className={`w-12 h-12 rounded-full flex items-center justify-center font-medium ${step === 3 ? "bg-[#ff8906] text-black" : "bg-gray-200 text-gray-400"}`}
        >
          3
        </span>

        <span
          className={`w-12 h-12 rounded-full flex items-center justify-center font-medium ${step === 4 ? "bg-[#ff8906] text-black" : "bg-gray-200 text-gray-400"}`}
        >
          4
        </span>

        {/* Tombol Next */}
        <span
          onClick={klikNext}
          className='w-12 h-12 rounded-full bg-[#ff8906] flex items-center justify-center cursor-pointer'
        >
          <img
            src='src/assets/img/icon/arrow-right-2.svg'
            alt='arrow right icon'
          />
        </span>
      </div>
    </>
  );
}

export default Stepper;
