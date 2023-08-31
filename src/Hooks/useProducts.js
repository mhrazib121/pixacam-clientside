import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productsIsLoading, setProductsIsLoading] = useState(true);
  useEffect(() => {
    setProductsIsLoading(true);
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsIsLoading(false);
        setProducts(data);
      });
  }, []);
  return [products, productsIsLoading];
};

export default useProducts;
