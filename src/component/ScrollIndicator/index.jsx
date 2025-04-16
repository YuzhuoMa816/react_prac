import { useState, useEffect } from "react";
import "./scroll.css";
import useScrollPercentage from "./useScrollPercentage";
function ScrollIndicatior({ url }) {
  const scrollPercentage = useScrollPercentage();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      let response = await fetch(getUrl);
      let getData = await response.json();

      if (getData && getData.products && getData.products.length > 0) {
        setData(getData.products);
        console.log(getData.products);

        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);

  console.log(scrollPercentage);

  if (error)
    if (loading) {
      return <div>Loading Data, please Wait !</div>;
    }

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress">
          <div
            className="progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => <p>{item.title}</p>)
          : null}
      </div>
    </div>
  );
}

export default ScrollIndicatior;
