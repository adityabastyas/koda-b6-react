import React from "react";


function CartSuccessModal(props) {
  const { isOpen, message } =  props;

  if (!isOpen) {return null;}

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white px-6 py-8 rounded-2xl shadow-lg flex flex-col items-center gap-3 ">
        <div className="text-green-500 text-4xl">✔</div>
        <p className="text-lg font-medium text-gray-700">
          {message}
        </p>
      </div>
    </section>
  );
}

export default CartSuccessModal;