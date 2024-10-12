import { useEffect, useState } from "react";

const API_URL = "https://script.google.com/macros/s/AKfycbyQ41PX9mTmziMPQrn2ENAeMMi5EgS91MqDdWuywLk3m5Ls3jVSCzyrSKnIEe0Z3-Kf/exec";

const fetchData = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const TestApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); 

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      if (result) {
        setData(result);
      } else {
        setError(true);
      }
      setLoading(false); 
    };

    fetchDataAsync();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data. Please try again later.</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div>
    {data.map((item) => (
        <div key={item.title}>
          <div>{item.title}</div>
          <div>{item.price}</div>
		  <div>{item.imgsrc}</div>
        </div>
      ))}
    </div>
  );
};

export default TestApi;