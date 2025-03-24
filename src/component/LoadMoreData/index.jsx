import { useState, useEffect } from "react";

import "./style.css";
function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log("Fetching products for count:", count);
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length > 0
          ? products.map((item) => (
              <div key={item.id} className="product">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Data
        </button>
        {disableButton ? <p>You reached the 100 products</p> : null}
      </div>
    </div>
  );
}

export default LoadMoreData;
