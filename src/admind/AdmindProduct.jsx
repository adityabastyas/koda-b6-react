import React from "react";
import { useForm } from "react-hook-form";

function AdmindProduct() {

  const [data, setData] = React.useState(null);

  React.useEffect(()=> {

    if(JSON.parse(localStorage.getItem("fromJson")) != null ) {
      setData(JSON.parse(localStorage.getItem("fromJson")) || null);
    }
  },[]);

  const {register, handleSubmit} = useForm(
    {defaultValues: {
      stock: 5
    }}
  
  );

  const addProduct = (inputFrom) => {
    // console.log(inputFrom);
    const currentData = data;
    if(currentData.products != null) {


      const product = {
        "id": currentData.products.length + 1,
        "image": {
          "imageSatu": inputFrom.img1,
          "imageDua": inputFrom.img2,
          "imageTiga": inputFrom.img3,
          "imageEmpat": inputFrom.img4
        },
        "name": inputFrom.nameProduct,
        "description": inputFrom.description,
        "price": inputFrom.price,
        "discount": inputFrom.discount,
        "stock" : inputFrom.stock
      };
      // console.log(product);
    
      currentData.products.push(product);
      setData(currentData);
      window.localStorage.setItem("fromJson", JSON.stringify(data)  );

    // console.log(currentData);
    } 

  };


  return (
    <>
      <section>
        <div className='mb-6'>
          <h1 className='text-2xl font-semibold mb-4'>Product List</h1>

          <div className='flex justify-between items-center mb-4'>
            <button className='bg-[#FF8906] text-white px-4 py-2 rounded flex items-center gap-2'>
              <span>+</span>
              <span>Add Product</span>
            </button>

            <div className='flex gap-2'>
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
                <th className='px-4 py-3'>Image</th>
                <th className='px-4 py-3'>Product Name</th>
                <th className='px-4 py-3'>Price</th>
                <th className='px-4 py-3'>Desc</th>
                <th className='px-4 py-3'>Product Size</th>
                <th className='px-4 py-3'>Method</th>
                <th className='px-4 py-3'>Stock</th>
                <th className='px-4 py-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-[#F9FAFB]'>
                <td>
                  <input className='px-4 py-3' type='checkbox' />
                </td>
                <td className='px-4 py-3'>
                  <img
                    src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg'
                    alt=''
                    className='w-12 h-12 bg-gray-200 rounded'
                  />
                </td>
                <td className='px-4 py-3'>Caramel Machiato</td>
                <td className='px-4 py-3'>IDR 40.000</td>
                <td className='px-4 py-3'>
                  Cold brewing is a method of brewing that...
                </td>
                <td className='px-4 py-3'>R, L, XL, 250gr</td>
                <td className='px-4 py-3'>Deliver, Dine In</td>
                <td className='px-4 py-3'>200</td>
                <td className='px-4 py-3'>
                  <div className='action-buttons flex gap-2'>
                    <button className='p-2'>
                      <img src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg' alt='' />
                    </button>
                    <button className='p-2'>
                      <img src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg' alt='' />
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <input className='px-4 py-3' type='checkbox' />
                </td>
                <td className='px-4 py-3'>
                  <img
                    src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg'
                    alt=''
                    className='w-12 h-12 bg-gray-200 rounded'
                  />
                </td>
                <td className='px-4 py-3'>Hazelnut Latte</td>
                <td className='px-4 py-3'>IDR 40.000</td>
                <td className='px-4 py-3'>
                  Cold brewing is a method of brewing that...
                </td>
                <td className='px-4 py-3'>R, L, XL, 250gr</td>
                <td className='px-4 py-3'>Deliver, Dine In</td>
                <td className='px-4 py-3'>200</td>
                <td className='px-4 py-3'>
                  <div className='action-buttons'>
                    <button className='p-2'>
                      <img src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg' alt='' />
                    </button>
                    <button className='p-2'>
                      <img src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg' alt='' />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className='bg-[#F9FAFB]'>
                <td>
                  <input className='px-4 py-3' type='checkbox' />
                </td>
                <td className='px-4 py-3'>
                  <img
                    src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg'
                    alt=''
                    className='w-12 h-12 bg-gray-200 rounded'
                  />
                </td>
                <td className='px-4 py-3'>Kopi Susu</td>
                <td className='px-4 py-3'>IDR 40.000</td>
                <td className='px-4 py-3'>
                  Cold brewing is a method of brewing that...
                </td>
                <td className='px-4 py-3'>R, L, XL, 250gr</td>
                <td className='px-4 py-3'>Dine In</td>
                <td className='px-4 py-3'>200</td>
                <td className='px-4 py-3'>
                  <div className='action-buttons'>
                    <button>
                      <img src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg' alt='' />
                    </button>
                    <button>
                      <img src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg' alt='' />
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <input className='px-4 py-3' type='checkbox' />
                </td>
                <td className='px-4 py-3'>
                  <img
                    src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg'
                    alt=''
                    className='w-12 h-12 bg-gray-200 rounded'
                  />
                </td>
                <td className='px-4 py-3'>Espresso Supreme</td>
                <td className='px-4 py-3'>IDR 40.000</td>
                <td className='px-4 py-3'>
                  Cold brewing is a method of brewing that...
                </td>
                <td className='px-4 py-3'>R, L, XL, 250gr</td>
                <td className='px-4 py-3'>Deliver</td>
                <td className='px-4 py-3'>200</td>
                <td className='px-4 py-3'>
                  <div className='action-buttons'>
                    <button>
                      <img src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg' alt='' />
                    </button>
                    <button>
                      <img src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg' alt='' />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className='bg-[#F9FAFB]'>
                <td>
                  <input className='px-4 py-3' type='checkbox' />
                </td>
                <td className='px-4 py-3'>
                  <img
                    src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg'
                    alt=''
                    className='w-12 h-12 bg-gray-200 rounded'
                  />
                </td>
                <td className='px-4 py-3'>Caramel Velvet Latte</td>
                <td className='px-4 py-3'>IDR 40.000</td>
                <td className='px-4 py-3'>
                  Cold brewing is a method of brewing that...
                </td>
                <td className='px-4 py-3'>R, L, XL, 250gr</td>
                <td className='px-4 py-3'>Deliver, Dine In</td>
                <td className='px-4 py-3'>200</td>
                <td className='px-4 py-3'>
                  <div className='action-buttons'>
                    <button>
                      <img src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg' alt='' />
                    </button>
                    <button>
                      <img src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg' alt='' />
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
        <div className=''>
          <div className='rounded w-[540px] p-6'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-xl font-semibold'>Add Product</h2>
              <button>
                <img src='https://images.pexels.com/photos/2128023/pexels-photo-2128023.jpeg' alt='' />
              </button>
            </div>

            <form onSubmit={handleSubmit(addProduct)}>
              <div>
                <label className='block text-sm mb-2'>Photo Product</label>
                <div className='border rounded p-4'>
                  <div className='w-12 h-12 bg-gray-200 rounded mb-2'></div>
                  <div>
                    <label htmlFor="img1">Image 1</label>
                    <input {...register("img1")} type="text" id="img1" />
                  </div>
                  <div>
                    <label htmlFor="img2">Image 2</label>
                    <input {...register("img2")} type="text" id="img2" />
                  </div>
                  <div>
                    <label htmlFor="img3">Image 3</label>
                    <input {...register("img3")} type="text" id="img3" />
                  </div>
                  <div>
                    <label htmlFor="img4">Image 4</label>
                    <input {...register("img4")} type="text" id="img4" />
                  </div>
                  
                </div>
              </div>

              <div>
                <label className='block text-sm mb-2'>Product name</label>
                <input
                  {...register("nameProduct")}
                  type='text'
                  placeholder='Enter Product Name'
                  className='w-full border rounded px-3 py-2'
                />
              </div>

              <div>
                <label className='block text-sm mb-2'>Price</label>
                <input
                  {...register("price")}
                  type='text'
                  placeholder='Enter Product Price'
                  className='w-full border rounded px-3 py-2'
                />
              </div>

              <div>
                <label className='block text-sm mb-2'>Discount</label>
                <input
                  {...register("discount")}
                  type='text'
                  placeholder='Enter Product Discount'
                  className='w-full border rounded px-3 py-2'
                />
              </div>

              <div>
                <label className='block text-sm mb-2'>Description</label>
                <textarea
                  {...register("description")}
                  placeholder='Enter Product Description'
                  className='w-full border rounded px-3 py-2 h-20'
                ></textarea>
              </div>

              {/* <div>
                <label className='block text-sm mb-2'>Product Size</label>
                <div className='flex gap-2'>
                  <button className='border rounded px-4 py-2'>R</button>
                  <button className='border rounded px-4 py-2'>L</button>
                  <button className='border rounded px-4 py-2'>XL</button>
                  <button className='border rounded px-4 py-2'>250 gr</button>
                  <button className='border rounded px-4 py-2'>500 gr</button>
                </div>
              </div> */}

              <div>
                <label className='block text-sm mb-2'>Stock</label>
                <select   {...register("stock")}
                  className='w-full border rounded px-3 py-2'>
                  <option value='' disabled>
                    Enter Product Stock
                  </option>
                  <option value='5'>5</option>
                  <option value='10'>10</option>
                  <option value='15'>15</option>
                  <option value='20'>20</option>

                </select>
              </div>

              <button className='w-full bg-[#FF8906] text-white py-2 rounded'>
                Save Product
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdmindProduct;
