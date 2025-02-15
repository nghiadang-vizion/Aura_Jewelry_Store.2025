import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../../services/productService";
import "./style.scss";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <section className="py-5 px-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-semibold">Shop The Latest</h3>
        <a className="text-secondary" href="#">
          View All
        </a>
      </div>
      <div className="row g-4">
        {products.map((product, index) => (
          <div key={index} className="col-md-4">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
