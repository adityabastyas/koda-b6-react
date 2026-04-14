import React from "react";
import http from "../lib/http";

export const DataContext = React.createContext();

function DataProvider({ children }) {
  // const url =
  //   "https://raw.githubusercontent.com/adityabastyas/koda-b6-react/refs/heads/main/public/data.json";

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      // if(JSON.parse(localStorage.getItem("fromJson")) == null) {
      //   const res = await fetch(url);
      //   if (!res.ok) {
      //     throw new Error("Gagal mengambil data");
      //   }
        
      //   const datajson = await res.json();
      //   localStorage.setItem("fromJson", JSON.stringify(datajson));
      // }

      // const dataProduct = JSON.parse(localStorage.getItem("fromJson"));

      // setData(dataProduct);

      
      const reqProduct  = await http("/products");
      const reqDiscount = await http("/discounts");

      const jsonProduct  = await reqProduct.json();
      const jsonDiscount = await reqDiscount.json();

      const reqReview = await http("/reviews");
      const jsonReview = await reqReview.json();

      console.log("review :", jsonReview);

      console.log("produk :", jsonProduct);
      console.log("diskon :", jsonDiscount);

      const discountMap = {};
      jsonDiscount.result.forEach((diskon) => {
        discountMap[diskon.product_id] = diskon;
      });

      const products = jsonProduct.result.map((item) => {
        const disc     = discountMap[item.product_id];
        const potongan = disc ? item.price * disc.discount_rate / 100 : 0;

        return {
          id          : item.product_id,
          name        : item.name,
          description : item.description,
          price       : item.price,
          discount    : item.price - potongan,
          isFlashSale : disc?.flash_sale || false,
          kategory_id : item.kategory_id,
          image       : { imageSatu: item.image_url },
        };
      });

      setData({ products, testimonials: jsonReview.result, });

      // React.useEffect(()=>{
      //   getDataUsers();
      // },[]);
      
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <DataContext.Provider value={{ data, loading, fetchData }}>
        {children}
      </DataContext.Provider>
    </>
  );
}

export default DataProvider;
