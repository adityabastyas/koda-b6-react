import React from "react";

export const ProductContext = React.createContext();

function ProductProvider({ children }) {
  const url =
    "https://raw.githubusercontent.com/adityabastyas/koda-b6-react/refs/heads/main/public/data.json";

  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Gagal mengambil data");
      }

      const data = await res.json();

      setProducts(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ProductContext.Provider value={{ products, loading }}>
        {children}
      </ProductContext.Provider>
    </>
  );
}

export default ProductProvider;
