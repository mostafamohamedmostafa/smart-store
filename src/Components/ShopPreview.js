import ProductsData from "../Components/StoreData";

function ShopPreview() {
  return (
    <section className="container">
      <div className="ShopPreview">
        <h1>Shop ShopPreview</h1>
        <div className="row  row-cols-md-3 g-4 ">
          {ProductsData.map((ProductsData, index) => {
            return (
              <div
                className="col  "
                data-aos="zoom-in-up"
                key={index}
              >
                <div className="card h-100 ">
                  <img
                    src={ProductsData.ProductImg}
                    className="img-fluid rounded-start "
                    alt=""
                  />
                  <div className="card-body">
                  <h4 className="card-title text-center"> ProductName: {ProductsData.ProductName} </h4>
                  <h5 className="card-title text-center">ProductBrand: {ProductsData.ProductBrand} </h5>
                  <h5 className="card-title text-center">ProductCategory: {ProductsData.ProductCategory} </h5>
                  <h5 className="card-title text-center">ProductDescription: {ProductsData.ProductDescription} </h5>
                  <h5 className="card-title text-center"> ProductPrice {ProductsData.ProductPrice} </h5>
               
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
