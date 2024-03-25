import ProductsData from "../Components/StoreData";
import { useState, useEffect } from "react";
function ShopPreview() {
  const [category, setCategory] = useState(ProductsData);

  const handleBtns = (e) => {
    let word = e.target.value;

    if (word === "All") {
      setCategory(ProductsData);
    } else if (word === "Samsung") {
      const filtered = ProductsData.filter(
        (item) => item.ProductBrand === "Samsung"
      );
      setCategory(filtered);
    } else if (word === "Apple") {
      const filtered = ProductsData.filter(
        (item) => item.ProductBrand === "Apple"
      );
      setCategory(filtered);
    }
  };
  return (
    <section className="container">
      <div className="ShopPreview">
        <h1>Shop ShopPreview</h1>
        <div>
          <button value="All" onClick={handleBtns}>
            All
          </button>
          <button value="Samsung" onClick={handleBtns}>
            Samsung
          </button>
          <button value="Apple" onClick={handleBtns}>
            Apple
          </button>
        </div>
        <div className="row  row-cols-md-3 g-4 ">
          {category.map((ProductsData, index) => {
            return (
              <div className="col  " data-aos="zoom-in-up" key={index}>
                <div className="card h-100 ">
                  <img
                    src={ProductsData.ProductImg}
                    className="img-fluid rounded-start "
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title text-center">
                      {" "}
                      ProductName: {ProductsData.ProductName}{" "}
                    </h4>
                    <h5 className="card-title text-center">
                      ProductBrand: {ProductsData.ProductBrand}{" "}
                    </h5>
                    <h5 className="card-title text-center">
                      ProductCategory: {ProductsData.ProductCategory}{" "}
                    </h5>
                    <h5 className="card-title text-center">
                      ProductDescription: {ProductsData.ProductDescription}{" "}
                    </h5>
                    <h5 className="card-title text-center">
                      ProductPrice {ProductsData.ProductPrice}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ShopPreview;
