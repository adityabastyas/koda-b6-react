import React from "react";

function AdmindOrder() {
  return (
    <>
      <section className='w-full'>
        <div className='mb-6'>
          <h1 className='text-2xl font-semibold mb-4'>Order List</h1>

          <div className='flex justify-between items-center mb-4'>
            <button className='bg-[#FF8906] text-white px-4 py-2 rounded flex items-center gap-2'>
              <span>+</span>
              <span>Add Product</span>
            </button>

            <div className='flex gap-2'>
              <select name='' id='' className='border'>
                <option value='' selected>
                  All
                </option>
                <option value=''>On Progress</option>
              </select>
              <input
                type='text'
                placeholder='Enter Product Name'
                className='border px-4 py-2 rounded w-64'
              />
              <button className='bg-[#FF8906] text-white px-6 py-2 rounded'>
                Filter
              </button>
            </div>
          </div>
        </div>
        <div>
          <table className='product-table min-w-full text-sm text-left'>
            <thead className='border-b text-gray-700'>
              <tr>
                <th className='px-4 py-3'>
                  <input type='checkbox' name='' id='' />
                </th>
                <th className='px-4 py-3'>No Order</th>
                <th className='px-4 py-3'>Date</th>
                <th className='px-4 py-3'>Order</th>
                <th className='px-4 py-3'>Status</th>
                <th className='px-4 py-3'>Total</th>
                <th className='px-4 py-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-[#F9FAFB] text-center p-4 h-[60px]'>
                <td>
                  <input type='checkbox' name='' id='' />
                </td>
                <td className='text-center'>#12354-09893</td>
                <td>26 January 2023</td>
                <td>
                  <ul className='list-disc'>
                    <li>Hazelnut Latte R 1x</li>
                    <li>Caramel Machiato L 1x</li>
                  </ul>
                </td>
                <td>
                  <span className='p-2 text-green-500 bg-green-200 rounded-full font-semibold'>
                    done
                  </span>
                </td>
                <td>IDR 40.000</td>
                <td className='px-4 py-3'>
                  <div className='action-buttons flex gap-2'>
                    <button className='p-1 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                    <button className='p-2 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                    <button className='p-2 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className='text-center h-[60px]'>
                <td>
                  <input type='checkbox' name='' id='' />
                </td>
                <td className='text-center'>#12354-09893</td>
                <td>26 January 2023</td>
                <td>
                  <ul className='list-disc'>
                    <li>Hazelnut Latte R 1x</li>
                    <li>Caramel Machiato L 1x</li>
                  </ul>
                </td>
                <td>
                  <span className='p-2 text-red-500 bg-red-200 rounded-full font-semibold'>
                    pending
                  </span>
                </td>
                <td>IDR 40.000</td>
                <td className='px-4 py-3'>
                  <div className='action-buttons flex gap-2'>
                    <button className='p-1 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                    <button className='p-2 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                    <button className='p-2 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className='text-center bg-[#F9FAFB] h-[60px]'>
                <td>
                  <input type='checkbox' name='' id='' />
                </td>
                <td className='text-center'>#12354-09893</td>
                <td>26 January 2023</td>
                <td>
                  <ul className='list-disc'>
                    <li>Hazelnut Latte R 1x</li>
                    <li>Caramel Machiato L 1x</li>
                  </ul>
                </td>
                <td>
                  <span className='p-2 text-orange-500 bg-orange-200 rounded-full font-semibold'>
                    On Proges
                  </span>
                </td>
                <td>IDR 40.000</td>
                <td className='px-4 py-3'>
                  <div className='action-buttons flex gap-2'>
                    <button className='p-1 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                    <button className='p-2 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                    <button className='p-2 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className='text-center h-[60px]'>
                <td>
                  <input type='checkbox' name='' id='' />
                </td>
                <td className='text-center'>#12354-09893</td>
                <td>26 January 2023</td>
                <td>
                  <ul className='list-disc'>
                    <li>Hazelnut Latte R 1x</li>
                    <li>Caramel Machiato L 1x</li>
                  </ul>
                </td>
                <td>
                  <span className='p-2 text-gray-500 bg-gray-200 rounded-full font-semibold'>
                    Waiting
                  </span>
                </td>
                <td>IDR 40.000</td>
                <td className='px-4 py-3'>
                  <div className='action-buttons flex gap-2'>
                    <button className='p-1 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                    <button className='p-2 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                    <button className='p-2 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className='text-center bg-[#F9FAFB] h-[60px]'>
                <td>
                  <input type='checkbox' name='' id='' />
                </td>
                <td className='text-center'>#12354-09893</td>
                <td>26 January 2023</td>
                <td>
                  <ul className='list-disc'>
                    <li>Hazelnut Latte R 1x</li>
                    <li>Caramel Machiato L 1x</li>
                  </ul>
                </td>
                <td>
                  <span className='p-2 text-orange-500 bg-orange-200 rounded-full font-semibold'>
                    On Proges
                  </span>
                </td>
                <td>IDR 40.000</td>
                <td className='px-4 py-3'>
                  <div className='action-buttons flex gap-2'>
                    <button className='p-1 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                    <button className='p-2 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                    <button className='p-2 bg-[#FF8906]'>
                      <img src='' alt='' />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex justify-between items-center mt-4 text-sm text-gray-600'>
          <span>Showing product 1 Of 50 product</span>

          <div className='flex gap-1'>
            <button className='px-3 py-1 border rounded'>Prev</button>
            <button className='px-3 py-1 border rounded'>1</button>
            <button className='px-3 py-1 border rounded'>2</button>
            <button className='px-3 py-1 border rounded'>3</button>
            <button className='px-3 py-1 border rounded'>4</button>
            <button className='px-3 py-1 border rounded'>5</button>
            <button className='px-3 py-1 border rounded'>6</button>
            <button className='px-3 py-1 border rounded'>7</button>
            <button className='px-3 py-1 border rounded'>8</button>
            <button className='px-3 py-1 border rounded'>9</button>
            <button className='px-3 py-1 border rounded'>Next</button>
          </div>
        </div>
      </section>

      <section>
        <div className='rounded w-[540px] p-6'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-semibold'>Order #12354-09893</h2>
            <button>
              <img src='' alt='' />
            </button>
          </div>

          <div>
            <div>
              <label className='block text-sm mb-2'>Order Information</label>
              <div className='border-b rounded p-4 flex justify-between items-center'>
                <div className='flex gap-2'>
                  <img src='../images/icon/Profile.svg' alt='' />
                  <span className='text-[#4F5665]'>Full Name</span>
                </div>
                <span className='font-semibold'>Ghaluh Wizard Anggoro</span>
              </div>
              <div className='border-b rounded p-4 flex justify-between items-center'>
                <div className='flex gap-2'>
                  <img src='../images/icon/Location.svg' alt='' />
                  <span className='text-[#4F5665]'>Address</span>
                </div>
                <span className='font-semibold'>Griya bandung indah</span>
              </div>
              <div className='border-b rounded p-4 flex justify-between items-center'>
                <div className='flex gap-2'>
                  <img src='../images/icon/PhoneCall.svg' alt='' />
                  <span className='text-[#4F5665]'>Phone</span>
                </div>
                <span className='font-semibold'>082116304338</span>
              </div>
              <div className='border-b rounded p-4 flex justify-between items-center'>
                <div className='flex gap-2'>
                  <img src='../images/icon/u_postcard.svg' alt='' />
                  <span className='text-[#4F5665]'>Payment Method</span>
                </div>
                <span className='font-semibold'>Cash</span>
              </div>
              <div className='border-b rounded p-4 flex justify-between items-center'>
                <div className='flex gap-2'>
                  <img src='../images/icon/truck.svg' alt='' />
                  <span className='text-[#4F5665]'>Shipping</span>
                </div>
                <span className='font-semibold'>Dine In</span>
              </div>
              <div className='border-b rounded p-4 flex justify-between items-center'>
                <div className='flex gap-2'>
                  <img src='../images/icon/process.svg' alt='' />
                  <span className='text-[#4F5665]'>Status</span>
                </div>
                <select name='' id='' className='bg-[#F1F1F1] rounded-md p-2'>
                  <option value='' selected>
                    On progress
                  </option>
                  <option value=''>Done</option>
                </select>
              </div>

              <div className='rounded p-4 flex justify-between items-center'>
                <div className='flex gap-2'>
                  <span className='text-[#4F5665]'>Transaksi</span>
                </div>
                <span className='text-[#FF8906]'>Idr 40.000</span>
              </div>
            </div>

            <div className='grid gap-5'>
              <span className='block text-2xl mb-2'>Your Order</span>
              <article className='grid grid-cols-4 gap-7 bg-[#E8E8E84D] p-2'>
                <div className='col-span-1'>
                  <img src='../images/image 31.png' alt='' />
                </div>
                <div className='col-span-3 grid gap-1'>
                  <h3 className='title-menu-title font-semibold'>
                    Hazelnut Latte
                  </h3>
                  <div>
                    <span>2pcs |</span> <span>Regular</span>
                    <span>| Ice |</span>
                    <span>Dine In</span>
                  </div>

                  <div className='flex gap-3 items-center'>
                    <span className='text-[#D00000] line-through text-[12px] font-medium'>
                      IDR 40.000
                    </span>
                    <span className='font-medium text-[14px] text-[#FF8906]'>
                      IDR 20.000
                    </span>
                  </div>
                </div>
              </article>
              <article className='grid grid-cols-4 gap-7 bg-[#E8E8E84D] p-2'>
                <div className='col-span-1'>
                  <img src='../images/image 31.png' alt='' />
                </div>
                <div className='col-span-3 grid gap-1'>
                  <h3 className='title-menu-title font-semibold'>
                    Hazelnut Latte
                  </h3>
                  <div>
                    <span>2pcs |</span> <span>Regular</span>{" "}
                    <span>| Ice |</span>
                    <span>Dine In</span>
                  </div>

                  <div className='flex gap-3 items-center'>
                    <span className='text-[#D00000] line-through text-[12px] font-medium'>
                      IDR 40.000
                    </span>
                    <span className='font-medium text-[14px] text-[#FF8906]'>
                      IDR 20.000
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <button className='w-full bg-[#FF8906] mt-5 text-white py-2 rounded'>
              Update
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdmindOrder;
