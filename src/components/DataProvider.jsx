import React from "react";

export const DataContext = React.createContext();

function DataProvider({ children }) {
  const url =
    "https://raw.githubusercontent.com/adityabastyas/koda-b6-react/refs/heads/main/public/data.json";

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      if(JSON.parse(localStorage.getItem("fromJson")) == null) {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Gagal mengambil data");
        }
        
        const datajson = await res.json();
        localStorage.setItem("fromJson", JSON.stringify(datajson));
      }

      const dataProduct = JSON.parse(localStorage.getItem("fromJson"));

      setData(dataProduct);
      
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
