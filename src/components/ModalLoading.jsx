import React from "react";

function ModalLoading(props) {
  const { isOke, text = "" } = props;

  if (!isOke) {
    return;
  }
  return (
    <section className='fixed inset-0 z-5 flex items-center justify-center bg-black/50'>
      <div className='bg-white px-6 py-10 rounded-2xl shadow-lg flex flex-col items-center gap-3'>
        <p className='text-2xl text-gray-700'>{text}</p>
      </div>
    </section>
  );
}

export default ModalLoading;
