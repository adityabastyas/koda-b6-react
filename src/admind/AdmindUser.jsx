import React from "react";

function AdmindUser() {
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
              <input
                type='text'
                placeholder='Enter User Name'
                className='border px-4 py-2 rounded w-64'
              />
              <button className='bg-[#FF8906] text-white px-6 py-2 rounded'>
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <table className='product-table min-w-full text-sm text-left'>
            <thead className='border-b text-gray-700'>
              <tr className='text-center'>
                <th className='px-4 py-3'>
                  <input type='checkbox' name='' id='' />
                </th>
                <th className='px-4 py-3'>Image</th>
                <th className='px-4 py-3'>Full Name</th>
                <th className='px-4 py-3'>Phone</th>
                <th className='px-4 py-3'>Address</th>
                <th className='px-4 py-3'>Email</th>
                <th className='px-4 py-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-[#F9FAFB] text-center p-4 h-[60px]'>
                <td className='px-4 py-3'>
                  <input type='checkbox' name='' id='' />
                </td>
                <td>
                  <div className='flex justify-center'>
                    <img src='https://placehold.co/50x40' alt='' />
                  </div>
                </td>
                <td>Eleanor Pena</td>
                <td>(205) 555-0100</td>
                <td className='max-w-[180px] break-words'>
                  3517 W. Gray St. Utica, Pennsylvania 57867
                </td>
                <td>cikaracak@gmail.com</td>
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
              <tr className='bg-[#F9FAFB] text-center p-4 h-[60px]'>
                <td className='px-4 py-3'>
                  <input type='checkbox' name='' id='' />
                </td>
                <td>
                  <div className='flex justify-center'>
                    <img src='https://placehold.co/50x40' alt='' />
                  </div>
                </td>
                <td>Ronald Richards</td>
                <td>(205) 555-0100</td>
                <td className='max-w-[180px] break-words'>
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </td>
                <td>cikaracak@gmail.com</td>
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
              <tr className='bg-[#F9FAFB] text-center p-4 h-[60px]'>
                <td className='px-4 py-3'>
                  <input type='checkbox' name='' id='' />
                </td>
                <td>
                  <div className='flex justify-center'>
                    <img src='https://placehold.co/50x40' alt='' />
                  </div>
                </td>
                <td>Darlene Robertson</td>
                <td>(209) 555-0104</td>
                <td className='max-w-[180px] break-words'>
                  4140 Parker Rd. Allentown, New Mexico 31134
                </td>
                <td>cikaracak@gmail.com</td>
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

              <tr className='bg-[#F9FAFB] text-center p-4 h-[60px]'>
                <td className='px-4 py-3'>
                  <input type='checkbox' name='' id='' />
                </td>
                <td>
                  <div className='flex justify-center'>
                    <img src='https://placehold.co/50x40' alt='' />
                  </div>
                </td>
                <td>Kristin Watson</td>
                <td>(252) 555-0126</td>
                <td className='max-w-[180px] break-words'>
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </td>
                <td>cikaracak@gmail.com</td>
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

              <tr className='bg-[#F9FAFB] text-center p-4 h-[60px]'>
                <td className='px-4 py-3'>
                  <input type='checkbox' name='' id='' />
                </td>
                <td>
                  <div className='flex justify-center'>
                    <img src='https://placehold.co/50x40' alt='' />
                  </div>
                </td>
                <td>Dianne Russell</td>
                <td>(201) 555-0124</td>
                <td className='max-w-[180px] break-words'>
                  4517 Washington Ave. Manchester, Kentucky 39495
                </td>
                <td>cikaracak@gmail.com</td>
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
    </>
  );
}

export default AdmindUser;
